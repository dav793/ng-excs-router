import { Component, OnInit } from '@angular/core';

import { ShopService } from "../shop.service";
import {Item} from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemId = '1';
  item: Item;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.item = this.shopService.getItem(this.itemId);
  }

}
