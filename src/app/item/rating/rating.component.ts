import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

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
    private shopService: ShopService,
    private router: Router
  ) { }

  ngOnInit() {
    let urlParts = this.router.url.split('/');
    this.item = this.shopService.getItem(urlParts[2]);
  }

  getRatingAsArray(): any[] {
    return Array(this.item.rating).fill('*');
  }

}
