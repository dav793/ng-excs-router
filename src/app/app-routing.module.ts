import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from "./shop/shop.component";
import { ItemComponent } from "./item/item.component";
import { CartComponent } from "./cart/cart.component";
import { PictureComponent } from "./item/picture/picture.component";
import { RatingComponent } from "./item/rating/rating.component";

import { CanActivateCartGuard } from "./cart/can-activate-cart.guard";
import { CanDeactivateCartGuard } from "./cart/can-deactivate-cart.guard";

const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [CanActivateCartGuard],
    canDeactivate: [CanDeactivateCartGuard]
  },
  { path: 'item/:id', component: ItemComponent, children: [
      { path: 'picture', component: PictureComponent },
      { path: 'rating', component: RatingComponent },
      { path: '', redirectTo: 'picture', pathMatch: 'full' }
    ] },
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    CanActivateCartGuard,
    CanDeactivateCartGuard
  ]
})
export class AppRoutingModule { }
