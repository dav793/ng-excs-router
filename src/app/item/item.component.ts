import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from "../user/user.service";
import { ShopService } from "../shop/shop.service";
import { Item } from "./item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemId;
  item: Item;
  messages: string[] = [];

  constructor(
    private userService: UserService,
    private shopService: ShopService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');

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

  goToPicture() {
    this.router.navigate(['item', this.itemId, 'picture']);
  }

  goToRating() {
    this.router.navigate(['item', this.itemId, 'rating']);
  }

}
