import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { ShoppingCartProductType } from "../../types";
import { ResponseI } from "../../api";
import cartApi from "../../services/cart";

interface UseCartI {
  cartProducts: ShoppingCartProductType[];
  increaseProductQuantite: (
    productId: string,
    quantite: number,
  ) => Promise<void>;
  decreaseProductQuantite: (
    productId: string,
    quantite: number,
  ) => Promise<void>;
  removeCartProduct: (productId: string, cartId: string) => Promise<void>;
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

  const increaseProductQuantite = async (
    productId: string,
    quantite: number,
  ): Promise<void> => {
    try {
      console.log(productId, quantite);
      if (isCartProductLoading) return;
      setIsCartProductLoading(true);
      const response = await cartApi.addProductToCart(productId, quantite);

      console.log(response);

      enqueueSnackbar(`the product quantie is  increment by ${quantite}`, {
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

  const decreaseProductQuantite = async (
    productId: string,
    quantite: number,
  ): Promise<void> => {
    try {
      if (setIsCartProductLoading) return;
      setIsCartProductLoading(true);
      await cartApi.decreaseProductQuatite(productId, quantite);
    } catch (err) {
      if (err.response.status === 401) localStorage.removeItem("currentuser");

      enqueueSnackbar(err.response.data.message, { variant: "error" });
    } finally {
      setIsCartProductLoading(false);
      setRefresh(!refresh);
    }
  };

  const removeCartProduct = async (productId: string) => {
    try {
      setIsCartProductLoading(true);
      const response: ResponseI =
        await cartApi.removeProductFromCart(productId);

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
    increaseProductQuantite,
    decreaseProductQuantite,
    removeCartProduct,
    isCartProductLoading,
  };
};

export default useCart;
export type { UseCartI };
