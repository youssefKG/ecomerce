import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
import Laoding from "../../components/loading";
import "./index.css";
import Footer from "../../components/footer";
const DefaultLayout = () => {
  return (
    <div className="layoutContainer">
      <Header />
      <Suspense fallback={<Laoding />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
