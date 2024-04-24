import { ProductType, ProductDetailType } from "../types";
import { productsData } from "../utils";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:1900";
axios.defaults.withCredentials = true;
const getProductsDetail = (productId: number): Promise<ProductDetailType> => {
  return new Promise((resolve, reject) => {
    const product: ProductType = productsData.filter(
      (p) => p.id !== productId,
    )[0];
    setTimeout(() => {
      resolve({ ...product, orderId: 4, isSeen: false, quantite: 1 });
    }, 1000); // 10 seconds delay
  });
};
export { getProductsDetail };
