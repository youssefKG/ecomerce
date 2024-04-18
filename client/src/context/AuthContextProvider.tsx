import { createContext, useState } from "react";
import { CurrentUserType } from "../types";
const AuthContext = createContext(null);
interface shoppingCartType {
  id: number;
  imgURL: string;
  quatinte: number;
  productPrice: number;
  totalPrice: number;
}
type BackdropType = {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
};
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUserType | null>(null);
  const [backdropAuth, setBackdropAuth] = useState<BackdropType>({
    isLoginOpen: false,
    isSignupOpen: false,
  });
  const [shoppingCartProducts, setShoppigCartProduts] = useState<
    shoppingCartType[]
  >([]);
  const handleOpenLoginBackdrop = (): void =>
    setBackdropAuth({
      isLoginOpen: true,
      isSignupOpen: false,
    });
  const handleOpenSignupBackdrop = (): void => {
    setBackdropAuth({
      isLoginOpen: false,
      isSignupOpen: true,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        backdropAuth,
        setBackdropAuth,
        shoppingCartProducts,
        setShoppigCartProduts,
        handleOpenLoginBackdrop,
        handleOpenSignupBackdrop,
        hello: "hello",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
export { AuthContext };
