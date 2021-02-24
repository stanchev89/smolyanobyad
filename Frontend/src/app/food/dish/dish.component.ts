import {Component, Input, OnInit} from '@angular/core';
import {ICart, ICartItem, IDish} from '../../interfaces';
import {FoodService} from '../food.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor(private foodService: FoodService) { }
  @Input() dish: IDish;
  cartItems = this.foodService.cart$.subscribe((cart: ICart) => cart.products);

  ngOnInit(): void {
  }

  addToCart(): void {
    const objToCart: ICartItem = {
      name: this.dish.name,
      price: this.dish.price,
      options: this.dish.options,
      quantity: 1,
      selected_options:[]
    };
    this.foodService.addToCart(objToCart);
  }

}