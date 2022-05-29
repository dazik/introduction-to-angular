import { Component, OnInit } from '@angular/core';
import { CartService, ICartItem } from "../../services/cart.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  public cart!: ICartItem[];

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

}
