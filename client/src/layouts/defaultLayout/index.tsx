import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/footer";
import Laoding from "../../components/loading";
import LoginBackDrop from "../../components/LoginBackdrop";
import SignupBackdrop from "../../components/SignupBackdrop";
import GlobalConextProvider from "../../context/GlobalContextProvider";
import "./index.css";

const DefaultLayout = () => {
  return (
    <GlobalConextProvider>
      <div className="layoutContainer">
        <LoginBackDrop />
        <SignupBackdrop />
        <Header />
        <Suspense fallback={<Laoding />}>
          <Outlet />
        </Suspense>
      </div>
    </GlobalConextProvider>
  );
};

export default DefaultLayout;
