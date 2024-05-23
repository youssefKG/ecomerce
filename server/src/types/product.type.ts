interface ReviewsType {
  review_id: string;
  firstName: string;
  lastName: string;
  userId: string;
  rate: string;
  review_content: string;
  date: Date;
  likes: number;
}

type ProductType = {
  id: string;
  title: string;
  description: string;
  imgURLS: string[];
  reviews: number;
  price: number;
  discount: number;
  rate: number;
  categorie: string;
  created_at: Date;
};

interface ProductDetailType extends ProductType {
  category: string;
  created_at: Date;
  isFavoris: boolean;
  quatite: number;
}
export { ReviewsType, ProductType, ProductDetailType };
