import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralMapPage } from './general-map';

@NgModule({
  declarations: [
    GeneralMapPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralMapPage),
  ],
  exports: [
    GeneralMapPage
  ]
})
export class GeneralMapPageModule {}
