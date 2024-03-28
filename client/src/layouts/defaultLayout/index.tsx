import { Outlet } from "react-router-dom";
import Header from "../../components/Navbar";
const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default DefaultLayout;
