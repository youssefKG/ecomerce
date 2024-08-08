import { ChangeEvent, useEffect, useState, useContext } from "react";
import { NotificationContext } from "../../context/NotificationContextProvider";
import { ResponseI } from "../../api";
import { CheckoutInfoErrorsType, CheckoutInfoDataType } from "../../types";
import validateCheckoutFormErrors from "../../utils/validateCheckoutForm";
import checkoutService from "../../services/checkout";

interface UseCheckoutI {
  checkoutInfoData: CheckoutInfoDataType | null;
  checkoutInfoErrors: CheckoutInfoErrorsType;
  handleInputChange: (e: ChangeEvent) => void;
  countryChange: (country: "Maroc" | "USA" | "French") => void;
  handleCheckoutInfoSubmit: () => Promise<void>;
  isCheckoutInfoLoading: boolean;
}

const useCheckout = (): UseCheckoutI => {
  const [checkoutInfoData, setCheckoutInfoData] =
    useState<CheckoutInfoDataType | null>(null);
  const [checkoutInfoErrors, setCheckoutInforErrors] =
    useState<CheckoutInfoErrorsType>({});
  const [isCheckoutInfoLoading, setIsCheckoutInfoLoading] =
    useState<boolean>(false);
  const { showNotification } = useContext(NotificationContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckoutInfoData((prevCheckoutInfoData: CheckoutInfoDataType) => ({
      ...prevCheckoutInfoData,
      [e.target.name]: e.target.value,
    }));
  };

  const countryChange = (value: "Maroc" | "USA" | "French") => {
    setCheckoutInfoData({ ...checkoutInfoData, country: value });
  };

  useEffect(() => {
    setCheckoutInforErrors(validateCheckoutFormErrors(checkoutInfoData));
  }, [checkoutInfoData]);

  const handleCheckoutInfoSubmit = async (): Promise<void> => {
    try {
      setIsCheckoutInfoLoading(true);

      if (
        checkoutInfoErrors?.city ||
        checkoutInfoErrors?.email ||
        checkoutInfoErrors?.adress ||
        checkoutInfoErrors?.phoneNumber ||
        checkoutInfoErrors?.country ||
        checkoutInfoErrors?.confirmEmail ||
        checkoutInfoErrors?.postalCode ||
        checkoutInfoErrors?.adressShipping ||
        checkoutInfoErrors?.country
      ) {
        showNotification("errors", "All fields required !!");
        return;
      }

      const response: ResponseI =
        await checkoutService.handleSubmitCheckoutInfo(checkoutInfoData);

      showNotification("info", response.data.message);
    } catch (err) {
      showNotification("error", err.response.data.message);
    } finally {
      setIsCheckoutInfoLoading(false);
    }
  };

  return {
    checkoutInfoErrors,
    checkoutInfoData,
    handleInputChange,
    countryChange,
    handleCheckoutInfoSubmit,
    isCheckoutInfoLoading,
  };
};

export default useCheckout;

export type { UseCheckoutI };
