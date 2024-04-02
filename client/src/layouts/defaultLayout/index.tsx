import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../components/Navbar";
import "./index.css";
import Footer from "../../components/footer";
const DefaultLayout = () => {
  return (
    <div className="layoutContainer">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
