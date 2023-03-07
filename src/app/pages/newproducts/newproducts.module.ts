import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewproductsPageRoutingModule } from './newproducts-routing.module';

import { NewproductsPage } from './newproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewproductsPageRoutingModule
  ],
  declarations: [NewproductsPage]
})
export class NewproductsPageModule {}
