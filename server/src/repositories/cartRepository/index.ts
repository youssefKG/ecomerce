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
  findCartProduct: (productId: string) => Promise<CartItems | null>;
}

@injectable()
class CartRepository implements ICartRepository {
  constructor(@inject(delay(() => Database)) private prisma: Database) {
    this.prisma = prisma;
  } // fetch the products in user cart

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

  public async findCartProduct(productId: string): Promise<CartItems | null> {
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
    const cartIem: CartItems = await this.prisma.cartItems.upsert({
      where: { productId_cartId: { productId, cartId } },
      update: { quantite: { increment: quantite } },
      create: { cartId, productId, quantite, price },
    });

    return cartIem;
  }
}

export default CartRepository;
export { ICartRepository };
