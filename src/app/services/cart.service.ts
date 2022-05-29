import { Injectable } from '@angular/core';

export interface ICartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Array<ICartItem> = [];

  constructor() { }

  add(item: ICartItem): void {
    this.cart.push(item);
    console.log(this.cart);
  }
}
