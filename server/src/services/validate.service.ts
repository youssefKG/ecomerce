import {
  LoginFormDataType,
  RegisterFormDataType,
  LoginFormDataErrorsType,
  RegisterFormDataErrorsType,
} from "../types";

// interface of validation service
interface IValidationService {
  isStrongPassword: (password: string) => boolean;

  isValidEmail: (email: string) => boolean;

  validateLoginFormData: (
    loginFormData: LoginFormDataType,
  ) => LoginFormDataErrorsType;

  validateRegisterFormData: (
    registerFormData: RegisterFormDataType,
  ) => RegisterFormDataErrorsType;

  isEmpty: <T extends object>(obj: T) => boolean;
}

// validate service
class ValidationService implements IValidationService {
  isEmpty<T extends object>(obj: T): boolean {
    return Object.entries(obj).length === 0;
  }

  // check is password is strong
  isStrongPassword(password: string): boolean {
    const passwordRegex: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    return passwordRegex.test(password);
  }

  // check is valid email
  isValidEmail(email: string): boolean {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  // validate login form data ;
  validateLoginFormData(values: LoginFormDataType): LoginFormDataErrorsType {
    console.log("from validation service ", values);
    const errors: LoginFormDataErrorsType = {};

    // validate the email
    if (!values?.email) errors.email = "Required";
    else if (!this.isValidEmail(values?.email))
      errors.email = "Not valid email !";

    // validate the password
    if (!values?.password) errors.password = "Required";
    else if (!this.isStrongPassword(values?.password))
      errors.password =
        "Password must contain at least one lowercase lettre , one uppercase lettre , one digit , one special character, and be at least 8 characters long";

    return errors;
  }

  // validate register form data
  validateRegisterFormData(
    values: RegisterFormDataType,
  ): RegisterFormDataErrorsType {
    // validation erros from register form data
    const errors: RegisterFormDataErrorsType = {};

    // validate the first Name
    if (!values.firstName) errors.firstName = "Required";
    else if (values.firstName.length > 15) errors.firstName = "";

    // validate the last name
    if (!values.lastName) errors.lastName = "Required";
    else if (values.lastName.length > 15)
      errors.lastName = "Muse be 15 characters or less";

    // validate the email
    if (!values.email) errors.email = "Required";
    else if (!this.isValidEmail(values.email))
      errors.email = "Not a valid email";

    // validate the password
    if (!values.password) errors.password = "Required";
    else if (!this.isStrongPassword(values.password))
      errors.password =
        "Password must contain at least one lowercase lettre , one uppercase lettre , one digit , one special character, and be at least 8 characters long";

    // validate the confirm password
    if (!values.confirmPassword) errors.confirmPassword = "Required";
    else if (
      !this.isStrongPassword(values.confirmPassword) ||
      values.password !== values.confirmPassword
    )
      errors.confirmPassword = "Password and confirm invalid";

    return errors;
  }
}

export default ValidationService;
export { IValidationService };
