import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LFTPage } from './lft.page';

const routes: Routes = [
  {
    path: '',
    component: LFTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LFTPageRoutingModule {}
