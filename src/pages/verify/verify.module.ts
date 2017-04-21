import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Verify } from './verify';

@NgModule({
  declarations: [
    Verify,
  ],
  imports: [
    IonicPageModule.forChild(Verify),
  ],
  exports: [
    Verify
  ]
})
export class VerifyModule {}
