import { Suspense, createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
import BackDropAuth from "../../components/BackDrops";
import "./index.css";
import Footer from "../../components/footer";
import Laoding from "../../components/loading";
import LoginBackDrop from "../../components/BackDrops/LoginBackDrop";
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
const Context = createContext(null);
const DefaultLayout = () => {
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(true);
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
        isLoginOpen,
        setIsLoginOpen,
        isSignupOpen,
        setIsSignupOpen,
      }}
    >
      <div className="layoutContainer">
        <BackDropAuth />
        <LoginBackDrop />
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
