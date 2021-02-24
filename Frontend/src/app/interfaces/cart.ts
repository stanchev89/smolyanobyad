import {ICartItem} from './cartItem';

export interface ICart {
    products: ICartItem[];
    totalPrice: number;
}