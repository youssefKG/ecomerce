export {};
type UserRequest = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "ADMIN" | "USER";
  isLogin: boolean;
  imgURL: string;
};

import { CartItems, ProductFieldsConfig } from "../types";
declare global {
  namespace Express {
    export interface Request {
      session: any;
      cartItem: CartItems;
      currentUser: UserRequest;
      product: ProductFieldsConfig;
    }
  }
}
