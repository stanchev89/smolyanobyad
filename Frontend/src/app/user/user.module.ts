import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
    declarations: [CartComponent, CartPageComponent, ProfileComponent],
    exports: [
        CartComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UserModule { }