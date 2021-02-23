import {Component, Input, OnInit} from '@angular/core';
import {IDish} from "../../interfaces";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  constructor() { }
  @Input() dish: IDish;

  ngOnInit(): void {
  }

  addToCart() {
    console.log('Добавено!')
  }

}
