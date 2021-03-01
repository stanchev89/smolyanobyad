import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProfileComponent } from './profile/profile.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import {FormsModule} from '@angular/forms';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [CartComponent, CartPageComponent, ProfileComponent, UserAddressComponent, UserOrdersComponent, AddNewAddressComponent],
    exports: [
        CartComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbAccordionModule,
        SharedModule
    ]
})
export class UserModule { }