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
  price: number;
  discount: number;
  imgsURLS: string[];
}
interface ProductDetailType extends ProductType {
  category: string;
  created_at: Date;
  isFavoris: boolean;
  quatite: number;
}
export { ReviewsType, ProductType, ProductDetailType };
