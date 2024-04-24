import { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { useSnackbar } from "notistack";
import { shoppingCartProductType } from "../types";

const ShoppingCartContext = createContext(null);

const ShopCartContextProvider = ({ children }) => {
  const { currentUser, handleOpenLoginBackdrop } = useContext(AuthContext);
  const [shoppingCartProducts, setShoppingCartProducts] = useState<
    shoppingCartProductType[]
  >([]);
  const [unseen, setUnseen] = useState<number>(0);
  const { enqueueSnackbar } = useSnackbar();
  const addProductToShoppingCart = async (
    product: shoppingCartProductType,
  ): Promise<void> => {
    try {
      if (currentUser) {
        enqueueSnackbar("Product added to shopping cart", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        });
        console.log(product);
        let i: number;
        // if product al ready in cart table
        for (i = 0; i < shoppingCartProducts.length; i++) {
          if (shoppingCartProducts[i].id === product.id) {
            setShoppingCartProducts(
              (
                prevShoppingCartProducts: shoppingCartProductType[],
              ): shoppingCartProductType[] => {
                prevShoppingCartProducts[i].quantite += product.quantite;
                return prevShoppingCartProducts;
              },
            );
            break;
          }
        }
        console.log(i);
        // if the product is not in shopping cart
        if (i === shoppingCartProducts.length)
          setShoppingCartProducts([...shoppingCartProducts, product]);
        setUnseen(unseen + 1);
      } else handleOpenLoginBackdrop();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(shoppingCartProducts);
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
