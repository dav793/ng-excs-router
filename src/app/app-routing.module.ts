import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from "./shop/shop.component";
import { ItemComponent } from "./item/item.component";
import { CartComponent } from "./cart/cart.component";

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
  { path: 'item/:id', component: ItemComponent },
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
