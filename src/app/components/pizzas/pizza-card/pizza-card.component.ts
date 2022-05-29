import { Component, Input, OnInit } from '@angular/core';
import { IPizza } from "../../../mock-data/pizzas-list";
import { CartService } from "../../../services/cart.service";

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.scss']
})
export class PizzaCardComponent implements OnInit {
  @Input() pizza!: IPizza;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    console.log(this.pizza);
  }

  add(): void {
    this.cartService.add({
      name: this.pizza.name,
      price: this.pizza.price,
      quantity: 1
    })
  }

}
