// interface ProductType {
//   id: string;
//   title: string;
//   rate: number;
//   imgURL: string;
//   price: number;
//   discount: number;
// }
interface ProductDetailType {
  id: string;
  title: string;
  description: string;
  rate: number;
  imgURL: string;
  price: number;
  discount: number;
  stock: number;
  similarProducts: ProductType[];
}

interface ProductType {
  title: string;
  description?: string;
  price: number;
  imgURL: string;
  discount: number;
  id: number;
}
interface ReviewType {
  id: number;
  reviewerName: string;
  description: string;
  likes: number;
  stars: number; // should be between 0 and 5
  date: Date;
}
interface CategorieType {
  title: string;
  imgsURL: string[];
}
interface Furniture {
  id: number;
  name: string;
}

interface FurnitureCategoryType {
  categoryName: string;
  items: Furniture[];
}
export type {
  ProductType,
  ProductDetailType,
  FurnitureCategoryType,
  ReviewType,
  CategorieType,
};
