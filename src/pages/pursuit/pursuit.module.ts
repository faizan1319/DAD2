import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PursuitPage } from './pursuit';

@NgModule({
  declarations: [
    PursuitPage,
  ],
  imports: [
    IonicPageModule.forChild(PursuitPage),
  ],
  exports: [
    PursuitPage
  ]
})
export class PursuitPageModule {}
