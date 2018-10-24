import { Component } from '@angular/core';

import { ShopService } from "../shop.service";
import { Item } from "../item";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  shopItems: Item[];

  constructor(private shopService: ShopService) {
    this.shopItems = this.shopService.getShopItems();
  }

  goToItem(id: string) {

  }

}
