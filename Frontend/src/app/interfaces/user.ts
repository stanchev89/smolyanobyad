import {IOrder} from './order';
import {IDish} from './dish';
import {ICart} from './cart';
import {IAddress} from './address';

export interface IUser {
    username: string;
    password: string;
    address: IAddress[];
    orders: IOrder[];
    favouriteDishes: IDish[];
    cart: ICart;
}