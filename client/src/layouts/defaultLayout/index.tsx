import { Suspense, createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
import "./index.css";
import Footer from "../../components/footer";
import Laoding from "../../components/loading";
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
      }}
    >
      <div className="layoutContainer">
        <Header />
        <Suspense fallback={<Laoding />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </Context.Provider>
  );
};
export default DefaultLayout;
