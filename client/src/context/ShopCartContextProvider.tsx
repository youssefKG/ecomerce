import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { useSnackbar } from "notistack";
import { shoppingCartProductType } from "../types";

const ShoppingCartContext = createContext(null);

const ShopCartContextProvider = ({ children }) => {
  const { currentUser, handleOpenLoginBackdrop } = useContext(AuthContext);
  const [shoppingCartProducts, setShoppingCartProducts] = useState<
    shoppingCartProductType[] | null
  >(null);
  const [unseen, setUnseen] = useState<number>(0);
  const { enqueueSnackbar } = useSnackbar();
  const addProductToShoppingCart = async (
    product: shoppingCartProductType,
  ): Promise<void> => {
    try {
      if (currentUser) {
        setShoppingCartProducts((prev) => {
          const newProductsShoppingCart: shoppingCartProductType[] = [];
          if (!prev) return [product];
          prev.forEach((item) => newProductsShoppingCart.push(item));
          newProductsShoppingCart.push(product);
          return newProductsShoppingCart;
        });
        enqueueSnackbar("Product added to shopping cart", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        console.log("product ", product);
        setUnseen(unseen + 1);
      } else handleOpenLoginBackdrop();
    } catch (err) {
      console.log(err);
    }
  };
  // const incrementQuatiteProduct = (productId: number): void => {};
  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartProducts,
        setShoppingCartProducts,
        addProductToShoppingCart,
        unseen,
        setUnseen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default ShopCartContextProvider;
export { ShoppingCartContext };
