import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBenePageRoutingModule } from './add-bene-routing.module';

import { AddBenePage } from './add-bene.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBenePageRoutingModule
  ],
  declarations: [AddBenePage]
})
export class AddBenePageModule {}
