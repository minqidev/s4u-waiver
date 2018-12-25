import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaliberListPage } from './caliber-list';

@NgModule({
  declarations: [
    CaliberListPage,
  ],
  imports: [
    IonicPageModule.forChild(CaliberListPage),
  ],
})
export class CaliberListPageModule {}
