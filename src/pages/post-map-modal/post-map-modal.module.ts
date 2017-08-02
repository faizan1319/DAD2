import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostMapModal } from './post-map-modal';

@NgModule({
  declarations: [
    PostMapModal,
  ],
  imports: [
    IonicPageModule.forChild(PostMapModal),
  ],
  exports: [
    PostMapModal
  ]
})
export class PostMapModalModule {}
