import { Response, Request, NextFunction } from "express";
import { inject, injectable } from "tsyringe";
import { CartType, ProductFieldsConfig } from "../../types";
import { CustomError } from "../../utils/errorHandler.ts";
import { CartRepository, ProductRepository } from "../../services";
import { Cart, CartItems } from "../../types";

interface ICartController {
  getCartProducts: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;

  addProductToCart: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;

  deleteProductFromCart: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

@injectable()
class CartController implements ICartController {
  constructor(
    @inject(CartRepository) private cartRepository: CartRepository,
    @inject(ProductRepository) private productRepository: ProductRepository,
  ) {}

  public async getCartProducts(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const userId = req.currentUser.id as string;
      const productCarts: CartType | null =
        await this.cartRepository.userCartProducts(userId);

      if (!productCarts) {
        next(new CustomError("no pround is found ", 402, null));
        return;
      }

      res.status(200).json({
        success: true,
        result: productCarts,
        message: "cart products",
      });
    } catch (err) {
      next(err);
      console.log(err);
    }
  }

  public async deleteProductFromCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const userId: string = req.currentUser.id;
      const cartItemId = req.params.cartItemId;

      // find product in cart items
      const cartItem: CartItems | null =
        await this.cartRepository.findCartProduct(cartItemId);

      // if the product is not in cart items
      if (!cartItem) {
        next(
          new CustomError(
            "the product that you try to delete does not exist",
            404,
            null,
          ),
        );
        return;
      }

      // find the user Cart
      const userCart: Cart | null = await this.cartRepository.findUserCart(
        cartItem.cartId,
      );

      // if the user cart does not exist
      if (!userCart) {
        next(new CustomError("there is no cart with this name ", 400, null));
        return;
      }

      // is it user cart ?
      if (userCart.userId !== userId) {
        next(new CustomError("you can only update only your cart ", 402, null));
        return;
      }

      // delete the product from cart
      const deletedCartProduct =
        await this.cartRepository.deleteCartItem(cartItemId);
      console.log("deleted cart product", deletedCartProduct);

      res.status(200).json({
        success: true,
        result: deletedCartProduct,
        message: "product is deleted from cart",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  public async addProductToCart(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { productId, quantite } = req.body;
      console.log(productId, quantite);
      const userId: string = req.currentUser.id;

      // check the card is belong to him
      const userCart: Cart =
        await this.cartRepository.findInsertUserCart(userId);

      if (!userCart) return;

      // if not his cart
      if (userCart.userId !== userId) {
        next(new CustomError("you can only update your cart ", 400, null));
        return;
      }

      const product: ProductFieldsConfig | null =
        await this.productRepository.getProductById(productId, {
          id: true,
          categoryId: true,
          stock: true,
          price: true,
        });

      console.log("product", product);

      // if the product does not exist
      if (!product) {
        next(
          new CustomError(
            "the product that you wanna add does not exist ",
            402,
            null,
          ),
        );
        return;
      }

      if (!product.stock || !product.price) return; // todo: fix this later

      // if the quantite that user wanna add does not exist in stock
      if (product.stock < quantite) {
        next(
          new CustomError(
            "The requested quantity exceeds the available stock for this product. Please reduce the quantity and try again.",
            422,
            null,
          ),
        );
        return;
      }

      // update the quantite if the product is already in cart if not create new one
      const cartItem = await this.cartRepository.upsertCartItem(
        userCart.id,
        productId,
        quantite,
        product.price,
      );

      res.status(200).json({
        success: true,
        result: cartItem,
        message: "product added to cart successfully",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export default CartController;
export { ICartController };
