import { ProductDetailType } from "../types";
import { reviewsData, productsData } from "../utils";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:1900";
axios.defaults.withCredentials = true;
const getProductsDetail = (): Promise<ProductDetailType> => {
  return new Promise((resolve, reject) => {
    const product: ProductDetailType = {
      id: 4,
      title: "rooms and beds ",
      description:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
      imgURL:
        "https://www.ikea.com/ma/fr/images/products/hovsta-cadre-motif-bouleau__0902228_pe652821_s5.jpg?f=xxs",
      rate: 4,
      price: 233.51,
      discount: 20,
      stock: 20,
      reviews: reviewsData,
      similarProducts: productsData,
      isFavoris: true,
    };
    setTimeout(() => {
      resolve(product);
    }, 3000); // 10 seconds delay
  });
};
export { getProductsDetail };
