import { Response, Request, NextFunction } from "express";
import { inject, injectable } from "tsyringe";
import { CustomError } from "../../utils/errorHandler.ts";
import { CartRepository, ProductRepository } from "../../services";
import { Cart, CartItems, ProductFieldsConfig, CartType } from "../../types";

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
  incrementCartItemQuantite: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  decrementCartItemQuantite: (
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

      if (!productCarts)
        return next(new CustomError("no pround is found ", 402, null));

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
        await this.cartRepository.findCartItem(cartItemId);

      // if the product is not in cart items
      if (!cartItem)
        return next(
          new CustomError(
            "the product that you try to delete does not exist",
            404,
            null,
          ),
        );

      // find the user Cart
      const userCart: Cart | null = await this.cartRepository.findUserCart(
        cartItem.cartId,
      );

      // if the user cart does not exist
      if (!userCart)
        return next(
          new CustomError("there is no cart with this name ", 400, null),
        );

      // is it user cart ?
      if (userCart.userId !== userId)
        return next(
          new CustomError("you can only update only your cart ", 402, null),
        );

      // delete the product from cart
      const deletedCartProduct =
        await this.cartRepository.deleteCartItem(cartItemId);

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
      const userId: string = req.currentUser.id;

      // check the card is belong to him
      const userCart: Cart =
        await this.cartRepository.findInsertUserCart(userId);

      if (!userCart) return;

      // if not his cart
      if (userCart.userId !== userId)
        return next(
          new CustomError("you can only update your cart ", 400, null),
        );

      const product: ProductFieldsConfig | null =
        await this.productRepository.getProductById(productId, {
          id: true,
          categoryId: true,
          stock: true,
          price: true,
        });

      // if the product does not exist
      if (!product)
        return next(
          new CustomError(
            "the product that you wanna add does not exist ",
            402,
            null,
          ),
        );

      if (!product.stock || !product.price) return; // todo: fix this later

      // if the quantite that user wanna add does not exist in stock
      if (product.stock < quantite)
        return next(
          new CustomError(
            "The requested quantity exceeds the available stock for this product. Please reduce the quantity and try again.",
            422,
            null,
          ),
        );

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

  public async incrementCartItemQuantite(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const cartItemId: string = req.params.cartItemId;
      const cartItem: CartItems = req.cartItem;
      const product: ProductFieldsConfig = req.product;

      if (!product.stock) return;

      if (product.stock < cartItem.quantite + 1)
        return next(
          new CustomError(
            "the quantite you are trying to add does not exist",
            404,
            null,
          ),
        );

      const updatedCartItem: CartItems | null =
        await this.cartRepository.incrementCartItemQuantite(cartItemId);

      res.status(200).json({
        message: "updated successfully",
        result: updatedCartItem,
        success: true,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  public async decrementCartItemQuantite(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const cartItem: CartItems = req.cartItem;

      // check if cart quantite not zero
      if (cartItem.quantite === 0)
        return next(
          new CustomError(
            "Quantite cannot be decrement below Zero!",
            400,
            null,
          ),
        );

      // update the cart item (decrement)
      const updatedCartItem: CartItems | null =
        await this.cartRepository.decrementCartItemQuantite(cartItem.id);

      res.status(200).json({
        result: updatedCartItem,
        success: true,
        message: "updated successfully!",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export default CartController;
export { ICartController };
