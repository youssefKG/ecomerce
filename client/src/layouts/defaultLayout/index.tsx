import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
import Footer from "../../components/footer";
import Laoding from "../../components/loading";
import LoginBackDrop from "../../components/LoginBackdrop";
import SignupBackdrop from "../../components/SignupBackdrop";
import AuthContextProvider from "../../context/AuthContextProvider";
import "./index.css";
const DefaultLayout = () => {
  return (
    <AuthContextProvider>
      <div className="layoutContainer">
        <LoginBackDrop />
        <SignupBackdrop />
        <Header />
        <Suspense fallback={<Laoding />}>
          <Outlet />
        </Suspense>
        <Footer />
      </div>
    </AuthContextProvider>
  );
};
export default DefaultLayout;
