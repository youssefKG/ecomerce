import { createContext, useState } from "react";
const ShoppingCartContext = createContext(null);
const ShopCartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default ShopCartContextProvider;
export { ShoppingCartContext };
