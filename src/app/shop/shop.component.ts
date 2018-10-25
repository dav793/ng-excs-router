import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { ShopService } from "./shop.service";
import { Item } from "../item/item";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopItems: Item[];
  showFrom: string;
  showTo: string;

  constructor(
    private shopService: ShopService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.shopItems = this.shopService.getShopItems();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if ((params.from || params.from === 0) && params.to) {
        this.shopItems = this.shopService.getShopItems().slice( parseInt(params.from), parseInt(params.to)+1 );
      }
    });
  }

  goToItem(id: string) {
    this.router.navigate(['item', id]);   //  localhost:4200/item/id
  }

  rangeChange(from: string, to: string) {
    let f = parseInt(from) || 0;
    let t = parseInt(to) || 999999;

    this.router.navigate(['shop'], { queryParams: { from: f, to: t } });
  }

}
