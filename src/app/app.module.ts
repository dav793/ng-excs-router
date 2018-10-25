import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { RatingComponent } from './item/rating/rating.component';
import { PictureComponent } from './item/picture/picture.component';

import { ShopService } from "./shop/shop.service";
import { UserService } from "./user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShopComponent,
    ItemComponent,
    CartComponent,
    RatingComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ShopService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
