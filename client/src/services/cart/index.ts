import api, { ResponseI } from "../../api";

interface CartApiI {
  getCartProducts: () => Promise<ResponseI>;
  addProductToCart: (productId: string, quantite: number) => Promise<ResponseI>;
  removeProductFromCart: (productId: string) => Promise<ResponseI>;
  increaseProductQuantite: (
    productId: string,
    quantite: number,
  ) => Promise<ResponseI>;
  decreaseProductQuatite: (
    productId: string,
    quantite: number,
  ) => Promise<ResponseI>;
}

class cartService implements CartApiI {
  getCartProducts = async (): Promise<ResponseI> => {
    return api.get("/cart/products");
  };

  cartProducts = async (): Promise<ResponseI> => {
    return api.get("/cart/products");
  };

  addProductToCart = async (productId: string, quantite: number) => {
    return api.post("/cart/add-product", { productId, quantite });
  };

  removeProductFromCart = async (productId: string): Promise<ResponseI> => {
    return api.delete(`/cart/${productId}`);
  };

  increaseProductQuantite = async (
    productId: string,
    quantite: number,
  ): Promise<ResponseI> => {
    return api.put("/cart/increase-quantite", { productId, quantite });
  };

  decreaseProductQuatite = async (
    productId: string,
    quantite: number,
  ): Promise<ResponseI> => {
    return api.put("/cart/decrease-quanttie", { productId, quantite });
  };
}

const instanceOfCartService: CartApiI = new cartService();

export default instanceOfCartService;
export type { CartApiI };
