interface ProductType {
  id: string;
  title: string;
  rate: number;
  imgURL: string;
  price: number;
  discount: number;
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
  id: number;
  title: string;
  imgsURL: string[];
}
interface ProductDetailType {
  id: number;
  title: string;
  description: string;
  rate: number;
  imgURL: string;
  price: number;
  discount: number;
  stock: number;
  similarProducts: ProductType[];
  isFavoris: boolean;
  reviews: ReviewType[];
}

interface Furniture {
  id: number;
  name: string;
}

interface FurnitureCategoryType {
  categoryName: string;
  items: Furniture[];
}
type FormDataOfReviewType = {
  firstName: string;
  lastName: string;
  review: string;
  rate: number;
};
export type {
  FormDataOfReviewType,
  ProductType,
  ProductDetailType,
  FurnitureCategoryType,
  ReviewType,
  CategorieType,
};
