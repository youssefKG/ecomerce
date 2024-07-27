import CheckoutInfo from "../../components/CheckoutInfo";
import Ordersummary from "../../components/OrderSummary";

const Checkout = () => {
  return (
    <div className="flex gap-8  md:mx-20 mx-2 sm:mx-10 flex-wrap mt-5">
      <CheckoutInfo />
      <Ordersummary />
    </div>
  );
};

export default Checkout;
