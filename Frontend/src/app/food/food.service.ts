import { Injectable } from '@angular/core';
import {ICart, ICartItem, IDish} from '../interfaces';
import {BehaviorSubject} from 'rxjs';
import {take} from 'rxjs/operators';
@Injectable()
export class FoodService {
  initialCart: ICart = {
    products: [],
    totalPrice: 0
  };
  cart$ = new BehaviorSubject<ICart>(this.initialCart);
  cartProducts = this.cart$.asObservable();

  dailyMenu: IDish[] = [
    {
      name: 'Шопска салата',
      price: 1.20,
      products: ['домати', 'краставици', 'сирене'],
      category: 'salad',
      meatless: true,
      img: '../../assets/shopska_salad.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Шопска салата с много сирене',
      price: 1.20,
      products: ['домати', 'сирене', 'сирене', 'много сирене', 'домати', 'сирене', 'сирене', 'много сирене'],
      category: 'salad',
      meatless: true,
      img: '../../assets/shopska_salad.jpg',
      weight: 300,
      options: {сирене: ['със_сирене_extraPrize_0_65', 'без_сирене']},
      selected_options: []
    },
    {
      name: 'Зелева салата',
      price: 1.20,
      products: ['зеле'],
      category: 'salad',
      meatless: true,
      img: '../../assets/zeleva_salata.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Зелева салата',
      price: 1.20,
      products: ['зеле'],
      category: 'salad',
      meatless: true,
      img: '../../assets/zeleva_salata.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Зелева салата',
      price: 1.20,
      products: ['зеле'],
      category: 'salad',
      meatless: true,
      img: '../../assets/zeleva_salata.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Зелева салата',
      price: 1.20,
      products: ['зеле', 'зеле', 'зеле', 'зеле', 'много зеле'],
      category: 'salad',
      meatless: true,
      img: '../../assets/zeleva_salata.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Минерална вода',
      price: 1.00,
      products: ['вода'],
      category: 'drink',
      meatless: true,
      img: '../../assets/water.png',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Минерална вода',
      price: 1.00,
      products: ['вода'],
      category: 'drink',
      meatless: true,
      img: '../../assets/water.png',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Минерална вода',
      price: 1.00,
      products: ['вода'],
      category: 'drink',
      meatless: true,
      img: '../../assets/water.png',
      weight: 300,
      options: undefined,
      selected_options: []
    },
    {
      name: 'Минерална вода',
      price: 1.00,
      products: ['вода'],
      category: 'drink',
      meatless: true,
      img: '../../assets/water.png',
      weight: 300,
      options: undefined,
      selected_options: []
    }

  ];

  constructor() {
  }

  demoMenu(): IDish[] {
    return this.dailyMenu;
  }

  calculateCartTotalPrice(cart: ICart): void {
    cart.totalPrice = 0;
    cart.products.forEach((product: ICartItem) => {
      cart.totalPrice += product.quantity * product.price;
    });
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
    this.cartProducts.pipe(take(1)).subscribe((cart: ICart) => {
      const exist = cart.products.find((prod: ICartItem) =>
          prod.name === newProduct.name
          && prod.price === newProduct.price
          && this.arraysEqual(prod.selected_options, newProduct.selected_options));
      if (exist) {
        exist.quantity += newProduct.quantity;
        this.calculateCartTotalPrice(cart);
        return this.cart$.next(cart);
      }
      cart.products = cart.products.concat(newProduct);
      this.calculateCartTotalPrice(cart);
      return this.cart$.next(cart);
    });
  }

  updateCartItem(cartItem: ICartItem): void {
    this.cartProducts.pipe(take(1)).subscribe((cart: ICart) => {
      const allItems = cart.products;
      allItems.forEach((item: ICartItem) => {
        if (item.name === cartItem.name && this.arraysEqual(item.selected_options, cartItem.selected_options)) {
          item.quantity = cartItem.quantity;
        }
      });
      this.calculateCartTotalPrice(cart);
      this.cart$.next(cart);
    });
  }

  removeItemFromCart(itemToRemove: ICartItem): void {
    this.cartProducts.pipe(take(1)).subscribe((cart: ICart) => {
      const allItems = cart.products;
      allItems.forEach((item: ICartItem, index) => {
        if (item.name === itemToRemove.name && this.arraysEqual(item.selected_options, itemToRemove.selected_options)) {
          cart.products.splice(index, 1);
        }
      });
      this.calculateCartTotalPrice(cart);
      this.cart$.next(cart);
    });
  }
}