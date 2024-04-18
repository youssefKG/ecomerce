import axios from "axios";
axios.defaults.baseURL = "http://localhost:1900";
axios.defaults.withCredentials = true;
import { ProductType, ProductDetailType } from "../types";
const getProducts = async () => {
  try {
    const products: ProductType[] = await axios.get("api/products");
    return products;
  } catch (err) 
    console.log(err);
    return err;
  }
};
const getProductsDetail = async (id: string) => {
  try {
    const productDetail = await axios.get(`api/productDetail/${id}`);
    return productDetail;
  } catch (err) {
    console.log(err);
  }
};
const handLoginSubmit =async ()=>{
  try{
  } catch(err){
    return err
  }
}
const handleRegisterSubmit = async () => {};
const addToFavorisProducts = async (id: string) => {};
const removeFromFavorisProducts = async (id: string) => {};
const addToPanel = async () => {};
const removeFromPanel = async (id: string) => {};
export default {
  getProducts,
  getProductsDetail,
  addToFavorisProducts,
  addToPanel,
  removeFromFavorisProducts,
  removeFromPanel,
};
