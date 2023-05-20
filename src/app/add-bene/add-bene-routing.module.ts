import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBenePage } from './add-bene.page';

const routes: Routes = [
  {
    path: '',
    component: AddBenePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBenePageRoutingModule {}
