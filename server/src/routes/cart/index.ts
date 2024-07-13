import express, { Router } from "express";
import { container } from "tsyringe";
// controllers
import CartController, {
  ICartController,
} from "../../controllers/cartController";
// middlewares
import verifyToken from "../../middlewares/verifyToken";
import Verify, { VerifyI } from "../../middlewares/verifyCart";

const route: Router = express.Router();

const cart: ICartController = container.resolve(CartController);
const verify: VerifyI = container.resolve(Verify);

route.get("/products", verifyToken, cart.getCartProducts.bind(cart));

route.delete(
  "/:cartItemId",
  verifyToken,
  cart.deleteProductFromCart.bind(cart),
);
route.put("/add-product", verifyToken, cart.addProductToCart.bind(cart));

route.put(
  "/cartItem/increment/:cartItemId",
  verifyToken,
  verify.verifyCartItem.bind(verify),
  cart.incrementCartItemQuantite.bind(cart),
);

route.put(
  "/cartItem/decrement/:cartItemId",
  verifyToken,
  verify.verifyCartItem.bind(verify),
);
export default route;
