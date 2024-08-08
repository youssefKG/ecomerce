import { createContext, useEffect, useState, useContext } from "react";
import { CurrentUserType } from "../types";
import { NotificationContext } from "../context/NotificationContextProvider";
import authService from "../services/authentication";

const AuthContext = createContext(null);

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
  const { showNotification } = useContext(NotificationContext);

  function checkAuth(fn: any) {
    if (!currentUser) {
      setBackdropAuth({ isLoginOpen: true, isSignupOpen: false });
      return (): void => undefined;
    }
    return fn;
  }

  const logout = async (): Promise<void> => {
    try {
      await authService.logout();
      setCurrentUser(null);
      showNotification("success", "logout Successfully");
      localStorage.removeItem("currentUser");
    } catch (err) {
      console.log(err);
      showNotification("error", err.response.data.message);
      localStorage.removeItem("currentUser");
    }
  };

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
        logout,
        setBackdropAuth,
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
