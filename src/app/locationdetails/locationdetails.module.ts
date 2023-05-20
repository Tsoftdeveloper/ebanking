import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationdetailsPageRoutingModule } from './locationdetails-routing.module';

import { LocationdetailsPage } from './locationdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationdetailsPageRoutingModule
  ],
  declarations: [LocationdetailsPage]
})
export class LocationdetailsPageModule {}
