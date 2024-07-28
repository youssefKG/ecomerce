import CheckoutInfo from "../../components/CheckoutInfo";
import Ordersummary from "../../components/OrderSummary";
import { useCheckout, UseCheckoutI } from "../../hooks";

const Checkout = () => {
  const {
    checkoutInfoData,
    checkoutInfoErrors,
    handleInputChange,
    countryChange,
  }: UseCheckoutI = useCheckout();

  return (
    <div className="flex gap-8  md:mx-20 mx-2 sm:mx-10 flex-wrap mt-5">
      <CheckoutInfo
        checkoutInfoData={checkoutInfoData}
        checkoutInfoErrors={checkoutInfoErrors}
        handleInputChange={handleInputChange}
        countryChange={countryChange}
      />
      <Ordersummary />
    </div>
  );
};

export default Checkout;
