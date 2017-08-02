import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentModal } from './comment-modal';

@NgModule({
  declarations: [
    CommentModal,
  ],
  imports: [
    IonicPageModule.forChild(CommentModal),
  ],
  exports: [
    CommentModal
  ]
})
export class CommentModalModule {}
