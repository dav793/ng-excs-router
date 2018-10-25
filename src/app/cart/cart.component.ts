import { Component } from '@angular/core';

import { UserService } from "../user/user.service";
import { ShopService } from "../shop/shop.service";
import { CartItem } from "./cartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    private userService: UserService,
    private shopService: ShopService
  ) { }

  getLoggedUsername(): string {
    let user = this.userService.getLoggedUser();
    if (user)
      return user.username;
    return 'N/A';
  }

  getCartItems(): CartItem[] {
    return this.shopService.getCartItems();
  }

  getTotal(): number {
    let total = 0;
    this.shopService.getCartItems().forEach(i => {
      total += i.quantity * i.item.price;
    });
    return total;
  }

  clearCart() {
    this.shopService.clearCartItems();
  }

  pay() {
    alert('we have your money now >:D');
    this.clearCart();
  }

  cartIsEmpty(): boolean {
    if (this.getCartItems() && this.getCartItems().length > 0)
      return true;
    return false;
  }

}
