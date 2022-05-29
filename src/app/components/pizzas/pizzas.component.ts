import { Component, OnInit } from '@angular/core';
import { pizzasList } from "../../mock-data/pizzas-list";

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  public pizzas = pizzasList;

  constructor() { }

  ngOnInit(): void {
  }

}
