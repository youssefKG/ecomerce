import axios, { AxiosResponse } from "axios";
import {
  CurrentUserType,
  LoginFormDataType,
  RegisterFormDataType,
} from "../types";
axios.defaults.baseURL = "http://localhost:1900/api";
axios.defaults.withCredentials = true;

type DataType = {
  success: boolean;
  message: string;
  result: CurrentUserType | null;
};

const login = async (loginFormData: LoginFormDataType): Promise<DataType> => {
  try {
    const response: AxiosResponse = await axios.post(
      "/auth/login",
      loginFormData,
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return err.response.data;
  }
};

const register = async (
  registerData: RegisterFormDataType,
): Promise<DataType> => {
  try {
    const response = await axios.post("/auth/register", registerData);
    const data: DataType = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { login, register };
