import {ICartItem} from './cartItem';

export interface IOrder {
    cart: ICartItem[];
    price: number;
    payment: string;
    successful_payment: boolean | undefined | null;
    date: string;
    address: string;
}