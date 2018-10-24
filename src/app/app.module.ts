import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';

import { ShopService } from "./shop.service";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ItemComponent,
    CartComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
