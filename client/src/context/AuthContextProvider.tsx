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

  const handleOpenRegisterBackdrop = (): void => {
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
        handleOpenRegisterBackdrop,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export { AuthContext };
// const [currentUser, setCurrentUser] = useState<CurrentUserType | null>({
//   id: 1,
//   firstName: "youssef",
//   lastName: "taoussi",
//   photoURL:
//     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
//   email: "yousseftaoussi894@gmail.com",
//   address: "derb khalid rue 10 n 89",
// });
