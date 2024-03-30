import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
import "./index.css";
const DefaultLayout = () => {
  return (
    <div className="layoutContainer">
      <Header />
      <Outlet />
    </div>
  );
};
export default DefaultLayout;
