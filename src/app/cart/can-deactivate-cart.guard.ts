import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CartComponent } from "./cart.component";

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateCartGuard implements CanDeactivate<CartComponent> {
  canDeactivate(
    component: CartComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return !component.cartIsEmpty();
  }
}
