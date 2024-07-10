import { Cart, CartItems, Product } from "@prisma/client";

type CartItemsType = CartItems & {
  product: Product[];
};

type CartType = Cart | { items: CartItemsType[] };

export { Cart, CartItems, CartType, CartItemsType };
