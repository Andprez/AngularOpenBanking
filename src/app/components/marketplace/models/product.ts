export interface Product {
  title: string;
  price: string;
  description: number;
  image: string;
  rating: Rating;
  category: Category;
  id?: number;
}

export interface Rating{
  rate: number;
  count: number;
}

export enum Category{
  electronics = "electronics",
  jewelery = "jewelery",
  mensClothing = "men's clothing",
  womensClothing = "women's clothing"
}
