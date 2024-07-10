import { createContext, useEffect, useState } from "react";
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

  function checkAuth(fn: any) {
    if (!currentUser) {
      setBackdropAuth({ isLoginOpen: true, isSignupOpen: false });
      return (): void => undefined;
    }
    return fn;
  }

  useEffect(() => {
    const getUserDataFromLocalStorage = (): void => {
      const userData: CurrentUserType | null = JSON.parse(
        localStorage.getItem("currentUser"),
      );

      if (!userData) setCurrentUser(null);
      else setCurrentUser(userData);
    };
    getUserDataFromLocalStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        checkAuth,
        currentUser,
        setCurrentUser,
        backdropAuth,
        setBackdropAuth,
        shoppingCartProducts,
        setShoppigCartProduts,
        handleOpenLoginBackdrop: () => {
          setBackdropAuth({
            isLoginOpen: true,
            isSignupOpen: false,
          });
        },
        handleOpenRegisterBackdrop: () => {
          setBackdropAuth({
            isLoginOpen: true,
            isSignupOpen: false,
          });
        },
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
