import { useEffect, useState, useContext } from "react";
import { ShoppingCartProductType } from "../../types";
import { ResponseI } from "../../api";
import cartApi from "../../services/cart";
import { NotificationContext } from "../../context/NotificationContextProvider";

interface UseCartI {
  cartProducts: ShoppingCartProductType[];
  incrementCartItemQuantite: (cartItemId: string) => Promise<void>;
  decrementCartItemQuantite: (cartItemId: string) => Promise<void>;
  removeCartItem: (cartItemId: string) => Promise<void>;
  isCartProductLoading: boolean;
}

const useCart = (): UseCartI => {
  const [cartProducts, setCartProducts] = useState<ShoppingCartProductType[]>(
    [],
  );
  useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
  const [isCartProductLoading, setIsCartProductLoading] =
    useState<boolean>(false);
  const { showNotification } = useContext(NotificationContext);

  const incrementCartItemQuantite = async (
    productId: string,
  ): Promise<void> => {
    try {
      if (isCartProductLoading) return;
      setIsCartProductLoading(true);
      const response = await cartApi.incrementCartItemQuantite(productId);

      console.log(response);

      showNotification("info", `the product quantie is  increment by 1`);
    } catch (err) {
      if (err.response.status === 401) localStorage.removeItem("currentuser");

      console.log(err);
      showNotification("error", err.response.data.message);
    } finally {
      setIsCartProductLoading(false);
      setRefresh(!refresh);
    }
  };

  const decrementCartItemQuantite = async (
    cartItemId: string,
  ): Promise<void> => {
    try {
      if (setIsCartProductLoading) return;
      setIsCartProductLoading(true);
      const response: ResponseI =
        await cartApi.decrementCartItemQuatite(cartItemId);
      showNotification("info", `the product quantie is  decrement by 1`);
      console.log(response);
    } catch (err) {
      if (err.response.status === 401) localStorage.removeItem("currentuser");

      console.log(err);
      showNotification("error", err.response.data.message);
    } finally {
      setIsCartProductLoading(false);
      setRefresh(!refresh);
    }
  };

  const removeCartItem = async (cartItemId: string) => {
    try {
      setIsCartProductLoading(true);
      const response: ResponseI =
        await cartApi.removeProductFromCart(cartItemId);

      showNotification("info", response.data.message);
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) localStorage.removeItem("currentuser");

      showNotification("error", err.response.data.message);
    } finally {
      setIsCartProductLoading(false);
      setRefresh(!refresh);
    }
  };

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        setIsCartProductLoading(true);

        const response: ResponseI = await cartApi.getCartProducts();

        setCartProducts(response.data.result.items);
        console.log(response);
      } catch (err) {
        if (err.status === 401) localStorage.removeItem("currentuser");
        showNotification("error", err.response.data.message);
        console.log(err);
      } finally {
        setIsCartProductLoading(false);
      }
    };

    fetchCartProducts();
  }, [refresh]);

  return {
    cartProducts,
    incrementCartItemQuantite,
    decrementCartItemQuantite,
    removeCartItem,
    isCartProductLoading,
  };
};

export default useCart;
export type { UseCartI };
