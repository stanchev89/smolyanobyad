export interface ICartItem {
    name: string;
    price: number;
    options: {} | undefined | null;
    selected_options: [];
    quantity: number;
}