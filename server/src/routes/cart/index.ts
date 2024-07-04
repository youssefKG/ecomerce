import express, { Router } from "express";
import { cartRepository, productRepository } from "../../services";
import CartController, {
  ICartController,
} from "../../controllers/cartController";

const cart: ICartController = new CartController(
  cartRepository,
  productRepository,
);
const route: Router = express.Router();

route.get("/cart-products", cart.getCartProducts.bind(cart));
route.delete("/:cartProductId", cart.deleteProductFromCart.bind(cart));
route.put("/:productId", cart.addProductToCart.bind(cart));

export default route;
