import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/footer";
import Laoding from "../../components/loading";
import LoginBackDrop from "../../components/LoginBackdrop";
import RegisterBackDrop from "../../components/registerBackDrop";
import GlobalConextProvider from "../../context/GlobalContextProvider";
import "./index.css";

const DefaultLayout = () => {
  return (
    <GlobalConextProvider>
      <div className="layoutContainer">
        <LoginBackDrop />
        <RegisterBackDrop />
        <Header />
        <Suspense fallback={<Laoding />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </GlobalConextProvider>
  );
};

export default DefaultLayout;
