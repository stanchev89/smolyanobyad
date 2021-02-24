import { Component, OnInit } from '@angular/core';
import {FoodService} from '../../food/food.service';
import {ICartItem} from "../../interfaces";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$ = this.foodService.cart$;
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

  updateQuantity(item: ICartItem, newQuantity: string): void {
    if (item.quantity !== Number(newQuantity)){
      item.quantity = Number(newQuantity);
      this.foodService.updateCartItem(item);
    }
    return;
  }

  removeItem(item: ICartItem): void {
    this.foodService.removeItemFromCart(item);
  }
}