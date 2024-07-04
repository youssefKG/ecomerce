import { Response, Request, NextFunction } from "express";
import { CartType } from "../../types";
import { CustomError } from "../../utils/errorHandler.ts";
import { IProductRepository, ICartRepository } from "../../services";
import { Cart, CartItems, ProductFieldsConfig } from "../../types";

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

class CartController {
  private productRepository: IProductRepository;
  private cartRepository: ICartRepository;

  constructor(
    cartRepository: ICartRepository,
    productRepository: IProductRepository,
  ) {
    this.cartRepository = cartRepository;
    this.productRepository = productRepository;
  }

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
      const { productId } = req.body;

      // check if the cart belong to user
      const userCart: Cart =
        await this.cartRepository.findInsertUserCart(userId);

      // is it user cart ?
      if (userCart.userId !== userId) {
        next(new CustomError("you can only update only your cart ", 402, null));
        return;
      }

      // if product does not exist in user cart
      const cartProduct: CartItems | null =
        await this.cartRepository.findCartProduct(productId);

      if (!cartProduct) {
        next(new CustomError("the product not found user cart", 400, null));
        return;
      }

      // if the product is not his shoppingCart
      if (cartProduct.cartId === userCart.id) {
        next(
          new CustomError(
            "you can delete only the product in your shoopingCart",
            402,
            null,
          ),
        );
        return;
      }

      const deletedCartProduct = await this.cartRepository.deleteCartItem(
        productId,
        userCart.id,
      );

      // find the product
      const product = await this.productRepository.getProductById(
        cartProduct.productId,
        { id: true, stocke: true },
      );

      if (!product || !product.stocke) {
        next(new CustomError("this product not exist", 402, null));
        return;
      }

      // update the product stock after deletion
      const newStock = product.stocke + cartProduct.quantite;
      await this.productRepository.updateProduct(product.id, newStock);

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
      if (userCart.userId !== userId) {
        next(new CustomError("you can only update your cart ", 400, null));
        return;
      }

      const product: ProductFieldsConfig | null =
        await this.productRepository.getProductById(productId, {
          id: true,
          categoryId: true,
          stocke: true,
        });

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

      if (!product.stocke || !product.price) return; // todo: fix this later

      // if the quantite that user wanna add does not exist in stock
      if (product.stocke > quantite) {
        next(
          new CustomError(
            "The requested quantity exceeds the available stock for this product. Please reduce the quantity and try again.",
            422,
            null,
          ),
        );
        return;
      }

      // update the product stock
      // update the quantite if the product is already in cart if not create
      // new one
      const cartItem = await this.cartRepository.upsertCartItem(
        userCart.id,
        productId,
        quantite,
        product.price,
      );

      const newStock = product.stocke - quantite;
      await this.productRepository.updateProduct(product.id, newStock);

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
