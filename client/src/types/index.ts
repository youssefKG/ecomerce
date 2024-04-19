interface ProductType {
  id: number;
  title: string;
  rate: number;
  description: string;
  imgURL: string;
  price: number;
  discount: number;
  stock: number;
}
interface shoppingCartProductType extends ProductType {
  quantity: number;
  isSeen: boolean;
}
interface ReviewType {
  id: number;
  reviewerName: string;
  description: string;
  likes: number;
  stars: number; // should be between 0 and 5
  date: Date;
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

interface CategorieType {
  id: number;
  title: string;
  imgsURL: string[];
}
interface CurrentUserType {
  id: number;
  firtName: string;
  lastName: string;
  photoURL: string;
  email: string;
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
  CurrentUserType,
  FormDataOfReviewType,
  shoppingCartProductType,
  ProductType,
  ProductDetailType,
  FurnitureCategoryType,
  ReviewType,
  CategorieType,
};
