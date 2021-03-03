import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef, HostListener,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { ICartItem} from '../../interfaces';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user$ = this.userService.userData$;
  userAddressArr$ = this.user$.pipe(map(user => user.address));
  orderDetails = false;
  showAddNewAddressTab = false;
  selectedAddress = null;

  @ViewChild('clickedInside') clickedInside;
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.clickedInside.nativeElement.contains(targetElement);
    if (!clickedInside) {
      console.log('outside clicked');
    }
  }


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user$.subscribe(user => this.selectedAddress =  user.address[0].address);
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

  addedNewAddress(): void{
    this.showAddNewAddressTab = false;
  }

  proba(el): void {
    console.log(el);
  }

}