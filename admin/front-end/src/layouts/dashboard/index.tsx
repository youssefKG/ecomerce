import { Outlet } from "react-router-dom";
import SiderBar from "../../components/containers/sideBar";
import Navbar from "../../components/containers/navbar";

const DashboardLayout = () => {
  return (
    <div className="md:grid md:grid-cols-6 h-screen ">
      <SiderBar />
      <div
        className="col-end-10 transition-colors col-start-2 dark:bg-neutral-800 dark:text-white h-screen overflow-scroll
        bg-blue-50/40 flex flex-col gap-4 "
      >
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
