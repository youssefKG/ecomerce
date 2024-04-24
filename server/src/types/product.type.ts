interface ReviewsType {
  revview_id: string;
  firstName: string;
  lastName: string;
  userId: string;
  rate: string;
  review_content: string;
  date: Date;
  likes: number;
}
interface ProductType {
  productId: string;
  title: string;
  rate: number;
  price: string;
  discount: number;
  imgsURLS: string[];
}
interface ProductDetailType extends ProductType {
  category: string;
  simillarProducts: ProductType[];
  reviews: ReviewsType[];
  isFavoris: boolean;
  quatite: number;
}
export { ReviewsType, ProductType, ProductDetailType };
