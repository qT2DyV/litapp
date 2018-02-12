import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, Platform, Tabs } from 'ionic-angular';
import { AppMinimize } from '@ionic-native/app-minimize';
import { Feed } from '../../providers/providers';
import { User } from '../../providers/providers';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';
import { Tab5Root } from '../pages';

@IonicPage({priority: 'high'})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  tab5Title = " ";

  @ViewChild('tabs') tabs: Tabs;

  constructor(
    public navCtrl: NavController,
    public translateService: TranslateService,
    public platform: Platform,
    public f: Feed,
    public user: User,
    private appMinimize: AppMinimize
  ) {

    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE', 'TAB5_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
      this.tab4Title = values['TAB4_TITLE'];
      this.tab5Title = values['TAB5_TITLE'];
    });

    platform.registerBackButtonAction(() => {
    if (navCtrl.canGoBack()) {
      navCtrl.pop();
    } else {
      if (this.tabs.getSelected().index > 0) {
        this.tabs.select(0);
      } else {
        if (platform.is('android'))
          this.appMinimize.minimize();
        else
          platform.exitApp();
      }
    }
  });

  }
}
