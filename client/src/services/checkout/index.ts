import api, { ResponseI } from "../../api";
import { CheckoutInfoDataType } from "../../types";

interface CheckoutServiceI {
  handleSubmitCheckoutInfo: (
    checkoutData: CheckoutInfoDataType,
  ) => Promise<ResponseI>;
}

class CheckoutService implements CheckoutI {
  public handleSubmitCheckoutInfo(
    checkoutData: CheckoutInfoDataType,
  ): Promise<ResponseI> {
    return api.post("/checkout/checkoutInfo", checkoutData);
  }
}

const checkoutService: CheckoutServiceI = new CheckoutService();

export default checkoutService;
export type { CheckoutServiceI };
