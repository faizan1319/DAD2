import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RelatedNews } from './related-news';

@NgModule({
  declarations: [
    RelatedNews,
  ],
  imports: [
    IonicPageModule.forChild(RelatedNews),
  ],
  exports: [
    RelatedNews
  ]
})
export class RelatedNewsModule {}
