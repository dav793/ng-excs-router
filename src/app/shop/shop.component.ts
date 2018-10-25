import { Component, OnInit } from '@angular/core';

import { ShopService } from "./shop.service";
import { Item } from "../item/item";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopItems: Item[];

  constructor(
    private shopService: ShopService
  ) {
    this.shopItems = this.shopService.getShopItems();
  }

  ngOnInit() {}

  goToItem(id: string) {

  }

}
