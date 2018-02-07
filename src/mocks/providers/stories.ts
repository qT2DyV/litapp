import { Injectable } from '@angular/core';

import { Story } from '../../models/story';
import { defstories } from '../data';


@Injectable()
export class Stories {

  stories: Story[];

  constructor() {
    this.stories = defstories;
  }

  query(params?: any) {
    if (!params) {
      return this.stories.slice();
    }

    return this.stories.slice().filter((story) => {
      for (let key in params) {
        let field = story[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return story;
        } else if (field == params[key]) {
          return story;
        }
      }
      return null;
    });
  }

  getById(id: any) {
    return this.stories[0];
  }

}
