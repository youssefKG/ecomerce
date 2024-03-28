interface ProductType {
  id: string;
  title: string;
  rate: number;
  imgURL: string;
  price: number;
  discount: number;
}
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
export { ProductType, ProductDetailType };
