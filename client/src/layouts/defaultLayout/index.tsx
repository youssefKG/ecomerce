import { Suspense, createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
import "./index.css";
import Footer from "../../components/footer";
import Laoding from "../../components/loading";
import LoginBackDrop from "../../components/LoginBackdrop";
import SignupBackdrop from "../../components/SignupBackdrop";
interface shoppingCartType {
  id: number;
  imgURL: string;
  quatinte: number;
  productPrice: number;
  totalPrice: number;
}
interface currentUserType {
  firtName: string;
  lastName: string;
  email: string;
}
type BackdropType = {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
};
const Context = createContext(null);
const DefaultLayout = () => {
  const [backdropAuth, setBackdropAuth] = useState<BackdropType>({
    isLoginOpen: true,
    isSignupOpen: false,
  });
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<currentUserType | null>(null);
  const [shoppingCartProducts, setShoppigCartProduts] =
    useState<shoppingCartType[]>();
  useEffect((): void => {
    localStorage.getItem("currentUser");
  }, []);
  return (
    <Context.Provider
      value={{
        currentUser,
        setCurrentUser,
        shoppingCartProducts,
        setShoppigCartProduts,
        isSignupOpen,
        setIsSignupOpen,
        backdropAuth,
        setBackdropAuth,
        handleOpenLoginBackdrop: () =>
          setBackdropAuth({ isLoginOpen: true, isSignupOpen: false }),
        handleOpenSignupBackdrop: () =>
          setBackdropAuth({ isLoginOpen: false, isSignupOpen: true }),
      }}
    >
      <div className="layoutContainer">
        <LoginBackDrop />
        <SignupBackdrop />
        <Header />
        <Suspense fallback={<Laoding />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </Context.Provider>
  );
};
export { Context };
export default DefaultLayout;
