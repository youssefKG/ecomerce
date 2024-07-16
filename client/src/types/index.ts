interface ProductType {
  id: string;
  title: string;
  rate: number;
  imgsURL: string[];
  price: number;
  discount: number;
  stock: number;
}

interface ProductDetailType extends ProductType {
  similarProducts: ProductType[];
  isFavoris: boolean;
  reviews: ReviewType[];
}

interface ProductDataType {
  isFavoris: boolean;
  id: string;
  name: string;
  rate: number;
  imgURL: string[];
  discount: number;
  description: string;
  price: number;
  stock: number;
}

interface LoginFormDataType {
  email: string;
  password: string;
}

interface LoginFormDataErrorsType {
  email?: string;
  password?: string;
}

interface RegisterFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormDataErrorsType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

type ProductCartType = {
  id: string;
  name: string;
  description: string;
  imgURLS: string[];
  categoryId: string;
  price: number;
  stock: number;
  rate: number;
  created_at: string;
};

interface ShoppingCartProductType {
  cartId: string;
  id: string;
  price: number;
  product: ProductCartType;
  quantite: number;
  productId: string;
}

interface ReviewType {
  id: string;
  authorId: string;
  productId: string;
  firstName: string;
  lastName: string;
  imgURL: string;
  content: string;
  rate: number;
  likes: number;
  dislikes: number;
  created_at: string;
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

interface FormReviewType {
  content: string;
  rate: number;
}

export type {
  LoginFormDataType,
  LoginFormDataErrorsType,
  RegisterFormDataType,
  RegisterFormDataErrorsType,
  AuthResponseType,
  CurrentUserType,
  FormReviewType,
  ShoppingCartProductType,
  ProductType,
  ProductDetailType,
  FurnitureCategoryType,
  ReviewType,
  CategorieType,
  ProductDataType,
};
