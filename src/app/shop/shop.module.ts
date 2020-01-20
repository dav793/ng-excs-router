import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';

import { ShopComponent } from './shop.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule
  ],
  declarations: [
    ShopComponent
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
