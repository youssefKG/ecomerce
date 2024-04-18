import { createContext, useState } from "react";
const ShoppingCartContext = createContext(null);
const ShopCartContextProvider = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <ShoppingCartContext.Provider value={{}}></ShoppingCartContext.Provider>
  );
};
export default ShopCartContextProvider;
export { ShoppingCartContext };
