import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Platform } from 'ionic-angular';

import { Api } from './shared/api';
import { User } from './user';
import { GLOBALS_KEY, VERSION_KEY } from './db';
import { ENV } from '../app/env';
import { handleNoCordovaError } from '../app/utils';
import { UX } from './shared/ux';

@Injectable()
export class Globals {
  private globals;
  private ready;
  private version = 18; // just increase number, unrelated to version number

  constructor(
    public api: Api,
    public platform: Platform,
    public user: User,
    public storage: Storage,
    public translate: TranslateService,
    private browser: BrowserTab,
    public ux: UX,
  ) {
    this.storage.get(VERSION_KEY).then(v => {
      if (v && v !== this.version) {
        setTimeout(() => {
          this.ux.showToast('INFO', 'UPDATED_MSG', 15000);
          this.user.removeStoredUser();
        }, 2000);
      }

      this.storage.set(VERSION_KEY, this.version);
    });

    this.ready = new Promise((resolve, reject) => {
      this.storage.get(GLOBALS_KEY).then(d => {
        if (d) {
          this.globals = d;
          resolve();
        } else {
          this.query().subscribe(() => {
            resolve();
          });
        }
      });
    });
  }

  onReady() {
    return this.ready;
  }

  // these getters assume globals has already been cached and loaded

  getLanguage(id: number) {
    if (this.globals.languages) {
      return Object.keys(this.globals.languages).filter(i => {
        const lang = this.globals.languages[i];
        if (parseInt(lang.id) === id) {
          return lang.shortname;
        }
      })[0];
    }
    return null;
  }

  getPopularTags() {
    const params = {
      limit: 100,
      periodCheck: false,
      period: 'all',
    };
    return this.api.get('3/tagsportal/top', params);
  }

  getVersion() {
    return this.version;
  }

  isWebApp() {
    // Override to show everything when developing in browser
    return !this.platform.is('cordova') && !ENV.DEV;
  }

  checkForUpdates(manual: boolean = false) {
    if (this.isWebApp()) return;
    // check for updates
    if (manual) this.ux.showToast('INFO', 'UPDATE_STARTED', 2000);
    this.api
      .get('app.json', undefined, undefined, 3)
      .catch(error => {
        console.error('globals.checkForUpdates', error);
        return Observable.of(false);
      })
      .subscribe((d: any) => {
        if (d) {
          if (d.appid !== this.api.appid) {
            this.api.appid = d.appid;
          }
          if (d.apikey !== this.api.apikey) {
            this.api.apikey = d.apikey;
          }

          if (d.version > this.version) {
            this.ux.showToast('INFO', 'UPDATE_MSG', 15000, 'DOWNLOAD_BUTTON', true).then(() => {
              const updateLink = d.updatelink || 'https://theilluminatus.github.io/litapp';
              this.browser.openUrl(updateLink).catch(err => handleNoCordovaError(err, () => window.open(updateLink)));
            });
          } else {
            if (manual) this.ux.showToast('INFO', 'UPDATE_ALREADYDONE', undefined, undefined, true);
          }
        } else {
          this.ux.showToast('ERROR', 'UPDATE_FAILEDMSG', undefined, undefined, true);
        }
      });
  }

  private query() {
    if (this.globals) return Observable.of(this.globals);

    const loader = this.ux.showLoader();
    return this.api
      .get('3/constants', null, null, null, 10000)
      .map((d: any) => {
        if (loader) loader.dismiss();
        if (!d) {
          this.ux.showToast();
          console.error('globals.query');
          return null;
        }

        this.globals = d;
        this.storage.set(GLOBALS_KEY, this.globals);
        return this.globals;
      })
      .catch(error => {
        if (loader) loader.dismiss();
        this.ux.showToast();
        console.error('globals.query', error);
        return Observable.of(null);
      });
  }
}
