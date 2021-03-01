import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishComponent } from './dish/dish.component';
import {FormsModule} from "@angular/forms";
import {UserModule} from "../user/user.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [MenuComponent, DishesComponent, DishComponent],
    imports: [
        CommonModule,
        FormsModule,
        UserModule,
        SharedModule
    ]
})
export class FoodModule { }