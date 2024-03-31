import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../../components/Navbar";
import "./index.css";
const DefaultLayout = () => {
  return (
    <div className="layoutContainer">
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default DefaultLayout;
