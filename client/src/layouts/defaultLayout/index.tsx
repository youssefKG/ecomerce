import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../components/Navbar";
import "./index.css";
import Footer from "../../components/footer";
import Laoding from "../../components/loading";
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
