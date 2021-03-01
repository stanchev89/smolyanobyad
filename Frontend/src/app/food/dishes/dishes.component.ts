import {Component, Input, OnInit} from '@angular/core';
import {IDish} from '../../interfaces';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor() { }
  @Input() dishes: IDish[];

  ngOnInit(): void {
  }

  selectCategory(cat): IDish[]{
    return this.dishes.filter(dish => dish.category === cat);
  }

}