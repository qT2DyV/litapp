import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { Story } from '../../models/story';

@Component({
  selector: 'story-list',
  templateUrl: 'story-list.html'
})
export class StoryListPage {

  Math: Math = Math;
  
  @Input() stories: Story[];
  @Input() ishistory: boolean = false;
  @Input() infinite: boolean = false;
  @Output() onDeleteBySwiping: EventEmitter<any> = new EventEmitter();
  @Output() ionInfinite: EventEmitter<any> = new EventEmitter();

  enableInfinite = true;

  constructor(public navCtrl: NavController) { }

  showHeaders(record, recordIndex, records) {
    if (this.ishistory) return null;
    let pagesize = 10;
    if (recordIndex % pagesize === 0 && recordIndex > 0) {
      let page = Math.round(recordIndex / pagesize);
      return (page+1) +" ("+ (page*pagesize+1) + " - "+ ((page+1)*pagesize) +")";
    }
    return null;
  }

  public enableInfinity() {
    this.enableInfinite = true;
  }

  loadMore($event) {
    if (this.infinite)
      this.ionInfinite.emit($event);
  }

}
