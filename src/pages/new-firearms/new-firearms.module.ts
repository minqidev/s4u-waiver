import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewFirearmsPage } from './new-firearms';

@NgModule({
  declarations: [
    NewFirearmsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewFirearmsPage),
  ],
})
export class NewFirearmsPageModule {}
