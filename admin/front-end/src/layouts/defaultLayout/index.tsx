import DashboardLayout from "../dashboard";
import GlobalContextProvider from "../../context/globalContext";

const DefaultLayout = () => {
  return (
    <GlobalContextProvider>
      <DashboardLayout />
    </GlobalContextProvider>
  );
};

export default DefaultLayout;
