export interface IDish {
  name: string;
  products: string[];
  meatless: boolean;
  category: string;
  price: number;
  weight: number;
  img: string;
  options: object | undefined | null;
  selected_options: string[];
}