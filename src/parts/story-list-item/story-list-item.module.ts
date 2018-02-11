import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipsModule } from 'ionic-tooltips';

import { StoryListItem } from './story-list-item';
import { BookmarkPopoverModule } from '../bookmark-popover/bookmark-popover.module';

@NgModule({
  declarations: [
    StoryListItem,
  ],
  imports: [
    IonicPageModule.forChild(StoryListItem),
    TranslateModule.forChild(),
    TooltipsModule,
    BookmarkPopoverModule
  ],
  exports: [
    StoryListItem
  ]
})
export class StoryListItemModule { }
