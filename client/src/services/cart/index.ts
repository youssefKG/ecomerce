import api, { ResponseI } from "../../api";

interface CartApiI {
  getCartProducts: () => Promise<ResponseI>;
  addProductToCart: (productId: string, quantite: number) => Promise<ResponseI>;
  removeProductFromCart: (productId: string) => Promise<ResponseI>;
  incrementCartItemQuantite: (cartItemId: string) => Promise<ResponseI>;
  decrementCartItemQuatite: (cartItemId: string) => Promise<ResponseI>;
}

class cartService implements CartApiI {
  getCartProducts = async (): Promise<ResponseI> => {
    return api.get("/cart/products");
  };

  addProductToCart = async (productId: string, quantite: number) => {
    return api.put("/cart/add-product", { productId, quantite });
  };

  removeProductFromCart = async (productId: string): Promise<ResponseI> => {
    return api.delete(`/cart/${productId}`);
  };

  incrementCartItemQuantite = async (
    cartItemId: string,
  ): Promise<ResponseI> => {
    return api.put(`/cart/cartItem/increment/${cartItemId}`);
  };

  decrementCartItemQuatite = async (cartItemId: string): Promise<ResponseI> => {
    return api.put(`/cart/cartItem/decrement/${cartItemId}`);
  };
}

const instanceOfCartService: CartApiI = new cartService();

export default instanceOfCartService;
export type { CartApiI };
