import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { ShoppingCartProductType } from "../../types";
import { ResponseI } from "../../api";
import cartApi from "../../services/cart";

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
  const [refresh, setRefresh] = useState<boolean>(false);
  const [isCartProductLoading, setIsCartProductLoading] =
    useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const incrementCartItemQuantite = async (
    productId: string,
  ): Promise<void> => {
    try {
      if (isCartProductLoading) return;
      setIsCartProductLoading(true);
      const response = await cartApi.incrementCartItemQuantite(productId);

      console.log(response);

      enqueueSnackbar(`the product quantie is  increment by 1`, {
        variant: "success",
      });
    } catch (err) {
      if (err.response.status === 401) localStorage.removeItem("currentuser");

      console.log(err);
      enqueueSnackbar(err.response.data.message, { variant: "error" });
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
      console.log(response);
    } catch (err) {
      if (err.response.status === 401) localStorage.removeItem("currentuser");

      console.log(err);
      enqueueSnackbar(err.response.data.message, { variant: "error" });
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

      console.log(response);
      if (response.status === 200)
        enqueueSnackbar(response.data.message, { variant: "success" });
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) localStorage.removeItem("currentuser");

      enqueueSnackbar(err.response.data.message, { variant: "error" });
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

        if (response.status === 200) {
          setCartProducts(response.data.result.items);
        }
        console.log(response.data.result);
      } catch (err) {
        if (err.status.status === 401) localStorage.removeItem("currentuser");
        enqueueSnackbar(err.response.data.message, { variant: "error" });
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
