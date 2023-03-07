import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewproductsPage } from './newproducts.page';

const routes: Routes = [
  {
    path: '',
    component: NewproductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewproductsPageRoutingModule {}
