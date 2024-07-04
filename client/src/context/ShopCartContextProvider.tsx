import { createContext, useContext, JSX } from "react";
import useCart, { UseCartI } from "../hooks/cart";

const ShoppingCartContext = createContext<UseCartI | null>(null);

const ShopCartContextProvider = ({
  children,
}: {
  children: any;
}): JSX.Element => {
  const {
    decreaseProductQuantite,
    cartProducts,
    errorMessage,
    increaseProductQuantite,
    removeCartProduct,
  }: UseCartI = useCart();

  return (
    <ShoppingCartContext.Provider
      value={{
        decreaseProductQuantite,
        removeCartProduct,
        errorMessage,
        cartProducts,
        increaseProductQuantite,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShopCartContextProvider;
export { ShoppingCartContext };
