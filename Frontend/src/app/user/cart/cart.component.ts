import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { ICartItem} from '../../interfaces';
import {UserService} from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user$ = this.userService.userData$;
  orderDetails = false;
  showAddNewAddressTab = false;
  // @ViewChild('addNewAddressBtn') newAddressBtn;


  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  updateQuantity(item: ICartItem, newQuantity: string): void {
    if (item.quantity !== Number(newQuantity)){
      item.quantity = Number(newQuantity);
      this.userService.updateCartItem(item);
    }
    return;
  }

  removeItem(item: ICartItem): void {
    this.userService.removeItemFromCart(item);
  }

  clearCart(): void{
    this.userService.clearCart();
  }

  toggleMenu(): void {
    this.orderDetails = !this.orderDetails;
  }

  buy(data): void{
    console.log(data);
  }

  toggleAddNewAddres(): void{
    this.showAddNewAddressTab = !this.showAddNewAddressTab;
  }

  closeTab(): void {
    this.showAddNewAddressTab = false;
  }

  clickedOutsideCart(): void{
    this.showAddNewAddressTab = false;
    this.orderDetails = false;
  }

}