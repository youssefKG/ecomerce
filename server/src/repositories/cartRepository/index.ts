import { PrismaClient } from "@prisma/client";
import { Cart, CartType, CartItems } from "../../types";

interface ICartRepository {
	userCartProducts: (userId: string) => Promise<CartType | null>;
	findInsertUserCart: (userId: string) => Promise<Cart>;
	upsertCartItem: (
		cartId: string,
		productId: string,
		quantite: number,
		price: number,
	) => Promise<CartItems>;
	finUserCart: (cartId: string) => Promise<Cart | null>;
	deleteCartItem: (
		productId: string,
		cartId: string,
	) => Promise<CartItems | null>;
	findCartProduct: (productId: string) => Promise<CartItems | null>;
}

class CartRepository implements ICartRepository {
	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	// fetch the products in user cart
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

	public async finUserCart(cartId: string): Promise<Cart | null> {
		try {
			const userCart: Cart | null = await this.prisma.cart.findUnique({
				where: { id: cartId },
			});

			return userCart;
		} catch (err) {
			console.log(err);
			return null;
		}
	}

	// delete item in cart
	public async deleteCartItem(
		productId: string,
		cartId: string,
	): Promise<CartItems | null> {
		try {
			const deletedProduct: CartItems | null =
				await this.prisma.cartItems.delete({
					where: { productId_cartId: { cartId, productId } },
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
			update: { quantite },
			create: { cartId, productId, quantite, price },
		});

		return cartIem;
	}
}

export default CartRepository;
export { ICartRepository };
