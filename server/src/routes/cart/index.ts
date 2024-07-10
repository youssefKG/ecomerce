import express, { Router } from "express";
import { container } from "tsyringe";
import CartController, {
  ICartController,
} from "../../controllers/cartController";
import verirfyToken from "../../middlewares/verifyToken";
import verifyToken from "../../middlewares/verifyToken";

const route: Router = express.Router();

const cart: ICartController = container.resolve(CartController);

route.get("/products", verifyToken, cart.getCartProducts.bind(cart));
route.delete(
  "/:cartItemId",
  verirfyToken,
  cart.deleteProductFromCart.bind(cart),
);
route.put("/add-product", verifyToken, cart.addProductToCart.bind(cart));

export default route;
