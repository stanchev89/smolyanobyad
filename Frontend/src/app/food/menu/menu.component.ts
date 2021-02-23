import { Component, OnInit } from '@angular/core';
import {FoodService} from "../food.service";
import {IDish} from "../../interfaces";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: IDish[] = this.foodService.dailyMenu;
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

}
