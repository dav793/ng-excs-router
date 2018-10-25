import { Component, OnInit } from '@angular/core';

import { UserService } from "../user/user.service";
import { ShopService } from "../shop/shop.service";
import { Item } from "./item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemId = '1';
  item: Item;
  messages: string[] = [];

  constructor(
    private userService: UserService,
    private shopService: ShopService
  ) { }

  ngOnInit() {
    if (this.itemId)
      this.item = this.shopService.getItem(this.itemId);
  }

  addToCart() {
    this.shopService.addItemToCart(this.item);
    this.messages.push('added to cart');
  }

  isLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  goToPicture() {}

  goToRating() {}

}
