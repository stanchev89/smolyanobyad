import { Injectable } from '@angular/core';
import {IDish} from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  dailyMenu: IDish[] = [
    {
      name: 'Шопска салата',
      price: 1.20,
      products: ['домати', 'краставици', 'сирене'],
      category: 'salad',
      meatless: true,
      img: '../../assets/shopska_salad.jpg',
      weight: 300
    },
    {
      name: 'Шопска салата с много сирене',
      price: 1.20,
      products: ['домати', 'сирене', 'сирене', 'много сирене', 'домати', 'сирене', 'сирене', 'много сирене'],
      category: 'salad',
      meatless: true,
      img: '../../assets/shopska_salad.jpg',
      weight: 300
    },
    {
      name: 'Зелева салата',
      price: 1.20,
      products: ['зеле'],
      category: 'salad',
      meatless: true,
      img: '../../assets/zeleva_salata.jpg',
      weight: 300
    },
    {
      name: 'Зелева салата',
      price: 1.20,
      products: ['зеле'],
      category: 'salad',
      meatless: true,
      img: '../../assets/zeleva_salata.jpg',
      weight: 300
    },
    {
      name: 'Зелева салата',
      price: 1.20,
      products: ['зеле'],
      category: 'salad',
      meatless: true,
      img: '../../assets/zeleva_salata.jpg',
      weight: 300
    },
    {
      name: 'Зелева салата',
      price: 1.20,
      products: ['зеле', 'зеле', 'зеле', 'зеле', 'много зеле'],
      category: 'salad',
      meatless: true,
      img: '../../assets/zeleva_salata.jpg',
      weight: 300
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300
    },
    {
      name: 'Агнешка супа',
      price: 2.50,
      products: ['агнешко месо', 'ориз', 'подправки'],
      category: 'soup',
      meatless: false,
      img: '../../assets/lamb_soup.jpg',
      weight: 300
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300
    },
    {
      name: 'Спанак с ориз',
      price: 3.20,
      products: ['спанак', 'ориз', 'масло', 'подравки'],
      category: 'main-dish',
      meatless: false,
      img: '../../assets/spinach_with_beef.jpg',
      weight: 300
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300
    }, {
      name: 'Халва',
      price: 1.30,
      products: ['халва'],
      category: 'desert',
      meatless: true,
      img: '../../assets/sweet_halva.jpg',
      weight: 300
    },
    {
      name: 'Минерална вода',
      price: 1.00,
      products: ['вода'],
      category: 'drink',
      meatless: true,
      img: '../../assets/water.png',
      weight: 300
    },
    {
      name: 'Минерална вода',
      price: 1.00,
      products: ['вода'],
      category: 'drink',
      meatless: true,
      img: '../../assets/water.png',
      weight: 300
    },
    {
      name: 'Минерална вода',
      price: 1.00,
      products: ['вода'],
      category: 'drink',
      meatless: true,
      img: '../../assets/water.png',
      weight: 300
    },
    {
      name: 'Минерална вода',
      price: 1.00,
      products: ['вода'],
      category: 'drink',
      meatless: true,
      img: '../../assets/water.png',
      weight: 300
    }

  ];

  constructor() {
  }

  demoMenu(): IDish[] {
    return this.dailyMenu;
  }
}
