import axios from "axios";
import { productsData } from "../utils";
import { CurrentUserType , ProductType} from "../types/index";
axios.defaults.baseURL = "http://localhost:1900/api";
axios.defaults.withCredentials = true;
const getProductsDetail = (id: number): ProductType | null => {
  for (let i: number = 0; i < productsData.length; i++)
    if (productsData[i].id === id) return productsData[i];
  return null;
};
const continueWithGoogle = async (): Promise<void> => {
  try {
    const currentUser = await axios.get("/auth/google");
    console.log(currentUser);
  } catch (err) {
    console.log(err);
  }
};
const login = async (currentUser: {
  email: string;
  password: string;
}): Promise<CurrentUserType> => {
  return axios.post("/auth/login", currentUser).then((res) => {
    return res?.data?.result;
  });
};

export { continueWithGoogle, getProductsDetail, login };
