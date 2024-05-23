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

type RegisterFormDataErrorsType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

type LoginFormDataErrorsType = {
  email?: string;
  password?: string;
};
export {
  RegisterFormDataType,
  LoginFormDataType,
  LoginFormDataErrorsType,
  RegisterFormDataErrorsType,
};
