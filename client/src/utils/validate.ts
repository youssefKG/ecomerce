import { isStrongPassword, isValidEmail } from "./index";
import { LoginFormDataType, RegisterFormDataType } from "../types";

type ErrorLoginFormData = {
  email?: string;
  password?: string;
};

type ErrorRegisterFormData = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};
// validate login form data
const validateLoginFormData = (
  values: LoginFormDataType | null,
): ErrorLoginFormData => {
  let errors: ErrorLoginFormData = {};

  // validate the email
  if (!values.email) errors.email = "Required";
  else if (!isValidEmail(values.email)) errors.email = "Not valid email !";

  // validate the password
  if (!values.password) errors.password = "Required";
  else if (!isStrongPassword(values.password))
    errors.password =
      "Password must contain at least one lowercase lettre , one uppercase lettre , one digit , one special character, and be at least 8 characters long";

  return errors;
};

// validate register form data
const validateRegisterFormData = (
  values: RegisterFormDataType,
): ErrorRegisterFormData => {
  const errors: ErrorRegisterFormData = {};

  // validate the first Name
  if (!values.firstName) errors.firstName = "Required";
  else if (values.firstName.length > 15)
    errors.firstName = "must be 15 characters or less ";

  // validate the last name
  if (!values.lastName) errors.lastName = "Required";
  else if (values.lastName.length > 15)
    errors.lastName = "Muse be 15 characters or less";

  // validate the email
  if (!values.email) errors.email = "Required";
  else if (!isValidEmail(values.email)) errors.email = "Not a valid email";

  // validate the password
  if (!values.password) errors.password = "Required";
  else if (!isStrongPassword(values.password))
    errors.password =
      "Password must contain at least one lowercase lettre , one uppercase lettre , one digit , one special character, and be at least 8 characters long";

  // validate the confirm password
  if (!values.confirmPassword) errors.confirmPassword = "Required";
  else if (values.password !== values.confirmPassword)
    values.confirmPassword = "Password and confirm does not match!";

  console.log(errors);

  return errors;
};
export { validateLoginFormData, validateRegisterFormData };
