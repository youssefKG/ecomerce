import { useEffect, useState } from "react";
import { shoppingCartProductType } from "../../types";
import { ResponseI } from "../../api";
import cartApi from "../../services/cart";

interface UseCartI {
  cartProducts: shoppingCartProductType[];
  errorMessage: string;
  increaseProductQuantite: (
    productId: string,
    quantite: number,
  ) => Promise<void>;
  decreaseProductQuantite: (
    productId: string,
    quantite: number,
  ) => Promise<void>;
  removeCartProduct: (productId: string) => Promise<void>;
}

function useCart(): UseCartI {
  const [cartProducts, setCartProducts] = useState<shoppingCartProductType[]>(
    [],
  );
  const [refresh, setRefresh] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [laoding, setLaoding] = useState<boolean>(false);

  const increaseProductQuantite = async (
    productId: string,
    quantite: number,
  ): Promise<void> => {
    try {
      if (laoding) return;
      setLaoding(true);
      await cartApi.increaseProductQuantite(productId, quantite);

      setLaoding(false);
      setRefresh(!refresh);
    } catch (err) {
      if (err.response.status === 401) localStorage.removeItem("currentuser");

      setErrorMessage(err.response.data.message);
      console.log(err);
      setLaoding(false);
    }
  };

  const decreaseProductQuantite = async (
    productId: string,
    quantite: number,
  ): Promise<void> => {
    try {
      if (laoding) return;
      setLaoding(true);
      await cartApi.decreaseProductQuatite(productId, quantite);

      setLaoding(false);
    } catch (err) {
      if (err.response.status === 401) {
        localStorage.removeItem("currentuser");
      }
      setErrorMessage(err.response.data.message);
      console.log(err);
      setLaoding(false);
    }
  };

  const removeCartProduct = async (productId: string) => {
    try {
      setLaoding(true);
      await cartApi.removeProductFromCart(productId);

      setLaoding(false);
      setRefresh(!refresh);
    } catch (err) {
      if (err.response.status === 401) localStorage.removeItem("currentuser");
      setLaoding(false);
      setRefresh(!refresh);
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        setLaoding(true);
        const response: ResponseI = await cartApi.getCartProducts();
        setCartProducts(response.data);
        setLaoding(false);
      } catch (err) {
        if (err.status.status === 401) localStorage.removeItem("currentuser");
        setErrorMessage(err.response.data.message);
        setLaoding(false);
        console.log(err);
      }
    };

    fetchCartProducts();
  }, [refresh]);

  return {
    cartProducts,
    errorMessage,
    increaseProductQuantite,
    decreaseProductQuantite,
    removeCartProduct,
  };
}

export default useCart;
export type { UseCartI };
