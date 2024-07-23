import { Database } from "../../services";
import { Cart, CartType, CartItems } from "../../types";
import { delay, inject, injectable } from "tsyringe";

interface ICartRepository {
  userCartProducts: (userId: string) => Promise<CartType | null>;
  findInsertUserCart: (userId: string) => Promise<Cart>;
  upsertCartItem: (
    cartId: string,
    productId: string,
    quantite: number,
    price: number,
  ) => Promise<CartItems>;
  findUserCart: (userId: string) => Promise<Cart | null>;
  deleteCartItem: (cartItemId: string) => Promise<CartItems | null>;
  findCartItem: (productId: string) => Promise<CartItems | null>;
  decrementCartItemQuantite: (cartItemId: string) => Promise<CartItems | null>;

  incrementCartItemQuantite: (cartItemId: string) => Promise<CartItems | null>;
}

@injectable()
class CartRepository implements ICartRepository {
  constructor(@inject(delay(() => Database)) private prisma: Database) {}

  public async userCartProducts(userId: string): Promise<CartType | null> {
    try {
      const products: CartType | null = await this.prisma.cart.findUnique({
        where: { userId },
        include: {
          // include items(products)
          items: { include: { product: true } },
        },
      });

      return products;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async findCartItem(productId: string): Promise<CartItems | null> {
    const product: CartItems | null = await this.prisma.cartItems.findUnique({
      where: { id: productId },
    });
    return product;
  }

  // find a user cart if not exist  create one
  public async findInsertUserCart(userId: string): Promise<Cart> {
    const userCart: Cart = await this.prisma.cart.upsert({
      where: { userId },
      update: {},
      create: { userId, total: 0 },
    });

    return userCart;
  }

  public async findUserCart(cartId: string): Promise<Cart | null> {
    try {
      const userCart: Cart | null = await this.prisma.cart.findFirst({
        where: { id: cartId },
      });

      return userCart;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  // delete item in cart
  public async deleteCartItem(cartItemId: string): Promise<CartItems | null> {
    try {
      const deletedProduct: CartItems = await this.prisma.cartItems.delete({
        where: { id: cartItemId },
      });

      return deletedProduct;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  // update the product quantite if  is already in cart if not add it
  public async upsertCartItem(
    cartId: string,
    productId: string,
    quantite: number,
    price: number,
  ): Promise<CartItems> {
    const cartItem: CartItems = await this.prisma.cartItems.upsert({
      where: { productId_cartId: { productId, cartId } },
      update: { quantite: { increment: quantite } },
      create: { cartId, productId, quantite, price },
    });

    console.log("cart Item", cartItem);

    return cartItem;
  }

  public async decrementCartItemQuantite(
    cartItemId: string,
  ): Promise<CartItems | null> {
    try {
      const cartItem: CartItems | null = await this.prisma.cartItems.update({
        where: { id: cartItemId },
        data: { quantite: { increment: 1 } },
      });

      return cartItem;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async incrementCartItemQuantite(
    cartItemId: string,
  ): Promise<CartItems | null> {
    try {
      const cartItem: CartItems | null = await this.prisma.cartItems.update({
        where: { id: cartItemId },
        data: { quantite: { increment: 1 } },
      });

      return cartItem;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default CartRepository;
export { ICartRepository };
