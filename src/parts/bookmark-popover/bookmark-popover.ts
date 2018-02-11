import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { Story } from '../../models/story';
import { List } from '../../models/list';
import { Lists } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'bookmark-popover',
  templateUrl: 'bookmark-popover.html'
})
export class BookmarkPopover {

  alllists: List[];
  story: Story;

  constructor(navParams: NavParams, public l: Lists) {
    this.l.query().subscribe(data => {
      if (data)
        this.alllists = data;
    });

    this.story = navParams.get('story');
  }

  toggleFromList(list: List) {

    if (!list.stories) {
      // load list before adding
      this.l.getById(list.urlname).subscribe();
    } else {

      if (list.stories.indexOf(this.story) > -1) {
        this.l.removeStory(list, this.story);
      } else {
        this.l.addStory(list, this.story);
      }
        
    }
  }
  
}