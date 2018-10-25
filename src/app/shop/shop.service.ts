import { Injectable } from '@angular/core';

import { Item } from "../item/item";
import { CartItem } from "../cart/cartItem";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shopItems: Item[] = [
    {
      id: '1',
      name: 'Salsa Lizano',
      price: 3
    },
    {
      id: '2',
      name: 'Pato de hule',
      price: 0.50
    },
    {
      id: '3',
      name: 'Helado de vainilla',
      price: 2
    },
    {
      id: '4',
      name: 'Cepillo de dientes',
      price: 2
    },
    {
      id: '5',
      name: 'Lata de frijoles',
      price: 2.50
    },
    {
      id: '6',
      name: 'Lechuga',
      price: 0.99
    },
    {
      id: '7',
      name: 'Pan cuadrado',
      price: 3
    },
    {
      id: '8',
      name: 'Queso',
      price: 4
    },
    {
      id: '9',
      name: 'Jamon',
      price: 5
    },
    {
      id: '10',
      name: 'Desodorante',
      price: 3.50
    }
  ];

  private cartItems: CartItem[] = [];

  constructor() { }

  getShopItems(): Item[] {
    return this.shopItems;
  }

  getItem(id: string): Item {
    return this.shopItems.find(i => i.id === id);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addItemToCart(item: Item) {
    let it = this.cartItems.find(i => i.item.id === item.id);
    if (it)
      it.quantity++;
    else
      this.cartItems.push({
        item: item,
        quantity: 1
      });
  }

  clearCartItems() {
    this.cartItems = [];
  }

}
