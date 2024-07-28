import { CheckoutInfoDataType, CheckoutInfoErrorsType } from "../../types";
import { isValidEmail } from "../../utils";

const validateCheckoutFormErrors = (
  values: CheckoutInfoDataType | null,
): CheckoutInfoErrorsType => {
  const errors: CheckoutInfoErrorsType = {};

  if (!values) return errors;

  if (!values.email) errors.email = "Required";
  else if (!isValidEmail(values.email)) errors.email = "Not a valid email";
  else errors.email = null;

  if (!values.confirmEmail) errors.confirmEmail = "Required";
  else if (values.confirmEmail !== values.email)
    errors.confirmEmail =
      "The confirmation email does not match the original email. Please check and try again";
  else values.confirmEmail = null;

  if (!values.adressShipping) errors.adressShipping = "Required";
  else errors.adressShipping = null;

  if (!values.city) errors.city = "Required";
  else errors.city = null;

  if (!values.postalCode) errors.postalCode = "Required";
  else errors.postalCode = null;

  if (!values.country) errors.country = "Required";
  else errors.country = null;

  if (!values.phoneNumber) errors.phoneNumber = "Required";
  else errors.phoneNumber = null;

  if (!values.adress) errors.adress = "Required";
  else errors.adress = null;

  return errors;
};

export default validateCheckoutFormErrors;
