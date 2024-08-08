export {};
import { CartItems, CurrentUser, ProductFieldsConfig, User } from "../types";

declare global {
  namespace Express {
    export interface Request {
      session: any;
      cartItem: CartItems;
      currentUser: CurrentUser;
      product: ProductFieldsConfig;
    }
  }
}
