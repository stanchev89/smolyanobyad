import {Injectable} from '@angular/core';
import {IUser} from '../interfaces/user';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {IOrder} from '../interfaces/order';
import {IAddress, ICart, ICartItem, IOrderDetails} from '../interfaces';


@Injectable()
export class UserService {
  initialCart: ICart = {
    products: [],
    totalPrice: 0
  };
  initialUser: IUser = {
    username: 'stanchev89',
    password: '123123',
    address: [{address: 'Varna,Lyuben Karavelov 50, ap 8', delivery: 1.5}, {
      address: 'Smolyan, ul. Chan 3, ap 43',
      delivery: 0.5
    }],
    phone: '+359876969696',
    email: 'stanchev89@abv.bg',
    orders: [],
    cart: this.initialCart
  };

  user$ = new BehaviorSubject<IUser>(this.initialUser);
  userData$ = this.user$.asObservable();


  constructor() {
  }

  calculateCartTotalPrice(cart: ICart): number {
    cart.totalPrice = 0;
    cart.products.forEach((product: ICartItem) => {
      cart.totalPrice += product.quantity * product.price;
    });
    return cart.totalPrice;
  }

  objectsEqual(o1, o2): boolean {
    return typeof o1 === 'object' && Object.keys(o1).length > 0
        ? Object.keys(o1).length === Object.keys(o2).length
        && Object.keys(o1).every(p => this.objectsEqual(o1[p], o2[p]))
        : o1 === o2;
  }

  arraysEqual(arr1, arr2): boolean {
    return arr1.length === arr2.length && arr1.every((o, idx) => this.objectsEqual(o, arr2[idx]));
  }

  addToCart(newProduct: ICartItem): void {
    this.userData$.pipe(take(1)).subscribe((user: IUser) => {
      const cart: ICart = user.cart;
      const exist = cart.products.find((prod: ICartItem) =>
          prod.name === newProduct.name
          && prod.price === newProduct.price
          && this.arraysEqual(prod.selected_options, newProduct.selected_options));
      if (exist) {
        exist.quantity += newProduct.quantity;
      } else {
        cart.products = cart.products.concat(newProduct);
      }
      cart.totalPrice = this.calculateCartTotalPrice(cart);
      return this.user$.next(user);
    });
  }

  updateCartItem(cartItem: ICartItem): void {
    this.userData$.pipe(take(1)).subscribe((user: IUser) => {
      const cart = user.cart;
      const allItems = cart.products;
      allItems.forEach((item: ICartItem) => {
        if (item.name === cartItem.name && this.arraysEqual(item.selected_options, cartItem.selected_options)) {
          item.quantity = cartItem.quantity;
        }
      });
      cart.totalPrice = this.calculateCartTotalPrice(cart);
      this.user$.next(user);
    });
  }

  removeItemFromCart(itemToRemove: ICartItem): void {
    this.userData$.pipe(take(1)).subscribe((user: IUser) => {
      const cart = user.cart;
      const allItems = cart.products;
      allItems.forEach((item: ICartItem, index) => {
        if (item.name === itemToRemove.name && this.arraysEqual(item.selected_options, itemToRemove.selected_options)) {
          cart.products.splice(index, 1);
        }
      });
      cart.totalPrice = this.calculateCartTotalPrice(cart);
      this.user$.next(user);
    });
  }

  clearCart(): void {
    this.userData$.pipe(take(1)).subscribe(user => {
      user.cart = {products: [], totalPrice: 0};
      this.user$.next(user);
    });
  }


  addUserAddress(newAddress: IAddress): void {
    this.userData$.pipe(take(1)).subscribe(user => {
      const existAddress = user.address.find(a => a.address === newAddress.address);
      if (!existAddress) {
        user.address.push(newAddress);
        user.address = user.address.reverse();
        this.user$.next(user);
      }
    });
  }

  deleteUserAddress(addressToDelete: IAddress): void {
    this.userData$.pipe(take(1)).subscribe(user => {
      let index;
      const existAddress = user.address.find((a: IAddress, i) => {
        index = i;
        return a.address === addressToDelete.address;
      });
      if (existAddress) {
        user.address.splice(index, 1);
        this.user$.next(user);
      }
    });
  }

  editUserData(data): void {
    this.userData$.pipe(take(1)).subscribe(user => {
      for (const prop in data) {
        user[prop] = data[prop];
      }
      this.user$.next(user);
    });
  }


  finishOrder(orderData: IOrderDetails): Observable<any> {
   return of(this.userData$.pipe(take(1)).subscribe(user => {
      const newEmptyCart: ICart = {
        products: [],
        totalPrice: 0
      }
      const newOrder: IOrder = {
        cart: user.cart.products,
        price: user.cart.totalPrice,
        address: orderData.address,
        payment: orderData.payment,
        date: Date.now(),
        successful_payment: orderData.payment === 'cash' ? true : false,
      };
      user.orders.push(newOrder);
      user.cart = newEmptyCart;
      this.user$.next(user);
    }));
  }



}