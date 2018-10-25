import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShopComponent } from './shop/shop.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';

import { ShopService } from "./shop/shop.service";
import { UserService } from "./user/user.service";

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
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ShopService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
