import { ChangeEvent, useEffect, useState } from "react";
import { CheckoutInfoErrorsType, CheckoutInfoDataType } from "../../types";
import validateCheckoutFormErrors from "../../utils/validateCheckoutForm";

interface UseCheckoutI {
  checkoutInfoData: CheckoutInfoDataType | null;
  checkoutInfoErrors: CheckoutInfoErrorsType;
  handleInputChange: (e: ChangeEvent) => void;
  countryChange: (country: "Maroc" | "USA" | "French") => void;
}

const useCheckout = (): UseCheckoutI => {
  const [checkoutInfoData, setCheckoutInfoData] =
    useState<CheckoutInfoDataType | null>(null);
  const [checkoutInfoErrors, setCheckoutInforErrors] =
    useState<CheckoutInfoErrorsType>({});

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

  return {
    checkoutInfoErrors,
    checkoutInfoData,
    handleInputChange,
    countryChange,
  };
};

export default useCheckout;

export type { UseCheckoutI };
