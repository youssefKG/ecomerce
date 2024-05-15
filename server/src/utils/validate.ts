import { isStrongPassword, isValidEmail } from "./index";
import {
  LoginFormDataType,
  RegisterFormDataType,
  LoginFormValidationErrorsType,
  RegisterFormValidationErrorsType,
} from "../types";

// validate login form data
const validateLoginFormData = (
  values: LoginFormDataType | null,
): LoginFormValidationErrorsType => {
  const errors: LoginFormValidationErrorsType = {
    email: "",
    password: "",
    isValid: true,
  };

  // validate the email
  if (!values?.email) {
    errors.email = "Required";
    errors.isValid = false;
  } else if (!isValidEmail(values?.email)) {
    errors.email = "Not valid email !";
    errors.isValid = false;
  }

  // validate the password
  if (!values?.password) {
    errors.password = "Required";
    errors.isValid = false;
  } else if (!isStrongPassword(values?.password)) {
    errors.password =
      "Password must contain at least one lowercase lettre , one uppercase lettre , one digit , one special character, and be at least 8 characters long";
    errors.isValid = false;
  }

  return errors;
};

// validate register form data
const validateRegisterFormData = (
  values: RegisterFormDataType,
): LoginFormValidationErrorsType => {
  // validation erros from register form data
  const errors: RegisterFormValidationErrorsType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isValid: true,
  };

  // validate the first Name
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "";
    errors.isValid = false;
  }

  // validate the last name
  if (!values.lastName) {
    errors.lastName = "Required";
    errors.isValid = false;
  } else if (values.lastName.length > 15) {
    errors.lastName = "Muse be 15 characters or less";
    errors.isValid = false;
  }

  // validate the email
  if (!values.email) {
    errors.email = "Required";
    errors.isValid = false;
  } else if (!isValidEmail(values.email)) {
    errors.email = "Not a valid email";
    errors.isValid = false;
  }

  // validate the password
  if (!values.password) {
    errors.password = "Required";
    errors.isValid = false;
  } else if (!isStrongPassword(values.password)) {
    errors.password =
      "Password must contain at least one lowercase lettre , one uppercase lettre , one digit , one special character, and be at least 8 characters long";
    errors.isValid = false;
  }

  // validate the confirm password
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
    errors.isValid = false;
  } else if (
    !isStrongPassword(values.confirmPassword) ||
    values.password === values.confirmPassword
  ) {
    errors.confirmPassword = "Password and confirm";
    errors.isValid = false;
  }

  return errors;
};
export { validateLoginFormData, validateRegisterFormData };
