interface RegisterFormDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface LoginFormDataType {
  email: string;
  password: string;
}

interface LoginFormValidationErrorsType extends LoginFormDataType {
  isValid: boolean;
}

interface RegisterFormValidationErrorsType extends RegisterFormDataType {
  isValid: boolean;
}

export {
  RegisterFormDataType,
  LoginFormDataType,
  LoginFormValidationErrorsType,
  RegisterFormValidationErrorsType,
};
