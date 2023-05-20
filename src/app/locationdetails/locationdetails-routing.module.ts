import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationdetailsPage } from './locationdetails.page';

const routes: Routes = [
  {
    path: '',
    component: LocationdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationdetailsPageRoutingModule {}
