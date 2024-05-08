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
interface LoginFormDataType {
  email: string;
  password: string;
}
interface RegisterFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface shoppingCartProductType extends ProductType {
  orderId: string;
  quantite: number;
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

interface ProductDetailType extends ProductType {
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
  firstName: string;
  lastName: string;
  photoURL: string;
  email: string;
  address: string;
}
interface AuthResponseType {
  success: boolean;
  message: string;
  result: CurrentUserType | null;
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
  LoginFormDataType,
  RegisterFormDataType,
  AuthResponseType,
  CurrentUserType,
  FormDataOfReviewType,
  shoppingCartProductType,
  ProductType,
  ProductDetailType,
  FurnitureCategoryType,
  ReviewType,
  CategorieType,
};
