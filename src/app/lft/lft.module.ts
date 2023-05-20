import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LFTPageRoutingModule } from './lft-routing.module';

import { LFTPage } from './lft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LFTPageRoutingModule
  ],
  declarations: [LFTPage]
})
export class LFTPageModule {}
