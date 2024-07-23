import { Outlet } from "react-router-dom";
import Ordersummary from "../../components/OrderSummary";

const CheckoutLayout = () => {
  return (
    <div className="flex gap-8  md:mx-20 mx-2 sm:mx-10 flex-wrap mt-5">
      <Outlet />
      <Ordersummary />
    </div>
  );
};

export default CheckoutLayout;
