import {Component, Input, OnInit} from '@angular/core';
import {ICart, ICartItem, IDish, IUser} from '../../interfaces';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() dish: IDish;
  cartItems = this.userService.user$.subscribe((user: IUser) => user.cart.products);

  ngOnInit(): void {
  }

  addToCart(): void {
    const objToCart: ICartItem = {
      name: this.dish.name,
      price: this.dish.price,
      options: this.dish.options,
      quantity: 1,
      selected_options: []
    };
    this.userService.addToCart(objToCart);
  }

}