import {
  Component,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import {ICartItem, IOrderDetails} from '../../interfaces';
import {UserService} from '../user.service';
import {take} from 'rxjs/operators';
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
  orderCompleted = false;

  @ViewChild('clickedInside') clickedInside;
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement): void {
    const clickedInside = this.clickedInside.nativeElement.contains(targetElement);
    // if (!clickedInside) {
    //   console.log('outside clicked');
    // }
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

  buy(data: IOrderDetails): void{
    if(data.payment === 'cash') {
      this.userService.finishOrder(data).pipe(take(1)).subscribe(() => {
        this.showAddNewAddressTab = false;
        this.orderDetails = false;
        this.orderCompleted = true;
        setTimeout(() => {
          this.orderCompleted = false;
        }, 3000);
      });
    }
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

}