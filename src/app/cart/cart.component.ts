import { Component } from '@angular/core';

import { ShopService } from "../shop.service";
import { CartItem } from "../cartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private shopService: ShopService) { }

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
  }

}
