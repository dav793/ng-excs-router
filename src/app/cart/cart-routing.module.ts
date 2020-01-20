import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart.component';
import { CanActivateCartGuard } from './can-activate-cart.guard';
import { CanDeactivateCartGuard } from './can-deactivate-cart.guard';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    canActivate: [CanActivateCartGuard],
    canDeactivate: [CanDeactivateCartGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CanActivateCartGuard,
    CanDeactivateCartGuard
  ]
})
export class CartRoutingModule { }
