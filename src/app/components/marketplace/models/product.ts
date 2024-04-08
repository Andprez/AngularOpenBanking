import { Category } from "./category";
import { Rating } from "./raiting";

export interface Product {
  title: string;
  price: string;
  description: number;
  image: string;
  rating: Rating;
  category: Category;
  id?: number;
}
