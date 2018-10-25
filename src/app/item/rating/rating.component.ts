import { Component, OnInit } from '@angular/core';

import { ShopService } from "../../shop/shop.service";
import { Item } from "../item";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  item: Item;

  constructor(
    private shopService: ShopService
  ) { }

  ngOnInit() {}

  getRatingAsArray(): any[] {
    return ['*', '*', '*', '*', '*'];
  }

}
