import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from "./item/item.component";
import { PictureComponent } from "./item/picture/picture.component";
import { RatingComponent } from "./item/rating/rating.component";

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
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
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
