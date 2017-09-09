import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadTestPage } from './upload-test';

@NgModule({
  declarations: [
    UploadTestPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadTestPage),
  ],
  exports: [
    UploadTestPage
  ]
})
export class UploadTestPageModule {}
