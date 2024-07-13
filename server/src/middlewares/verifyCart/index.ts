import { Request, Response, NextFunction } from "express";
import { inject, container, injectable } from "tsyringe";
import { CartRepository, ProductRepository } from "../../services";
import { CustomError } from "../../utils/errorHandler.ts";
import { CartItems } from "@prisma/client";
import { Cart } from "../../types";

interface VerifyI {
  verifyCartItem: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

@injectable()
class Verify implements VerifyI {
  constructor(
    @inject("ProductRepository") private productRepository: ProductRepository,
    @inject("CartRepository") private cartRepository: CartRepository,
  ) {}

  public async verifyCartItem(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      console.log("start");
      const cartItemId: string = req.params.cartItemId;
      const userId: string = req.currentUser.id;
      console.log(cartItemId);
      // check if the product is not exit in cart
      const cartItem: CartItems | null =
        await this.cartRepository.findCartItem(cartItemId);

      console.log(cartItem);
      if (!cartItem)
        return next(
          new CustomError(
            "The product you are trying to update is not in your cart. Please add the product to your cart first.",
            400,
            null,
          ),
        );

      // find the cart of the cart Item
      const userCart: Cart | null = await this.cartRepository.findUserCart(
        cartItem.cartId,
      );

      // if the$e is no cart
      if (!userCart)
        return next(new CustomError("the product cart not found", 404, null));

      // if the cart is not belong to user
      if (userCart.userId !== userId)
        return next(
          new CustomError(
            "You do not have permission to update this product as it does not belong to your cart.",
            403,
            null,
          ),
        );

      // find the product
      const product = await this.productRepository.getProductById(
        cartItem.productId,
        { id: true, stock: true },
      );

      if (!product)
        return next(
          new CustomError(
            "the product you are trying to add does exist",
            404,
            null,
          ),
        );

      req.cartItem = cartItem;
      req.product = product;
      next();
    } catch (err) {
      next(err);
    }
  }
}

container.register("ProductRepository", { useClass: ProductRepository });
container.register("CartRepository", { useClass: CartRepository });

export default Verify;
export type { VerifyI };
