import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './shop/shop.module';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ItemComponent } from './item/item.component';
import { RatingComponent } from './item/rating/rating.component';
import { PictureComponent } from './item/picture/picture.component';

import { ShopService } from "./shop/shop.service";
import { UserService } from "./user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemComponent,
    RatingComponent,
    PictureComponent
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
