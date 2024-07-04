import api, { ResponseI } from "../../api";
import { LoginFormDataType, RegisterFormDataType } from "../../types";

interface AuthServiceI {
  login: (loginFormData: LoginFormDataType) => Promise<ResponseI>;
  register: (registerFormData: RegisterFormDataType) => Promise<ResponseI>;
  logout: () => Promise<ResponseI>;
}

class AuthService implements AuthServiceI {
  public async login(loginFormData: LoginFormDataType): Promise<ResponseI> {
    return api.post("/auth/login", loginFormData);
  }

  public async register(
    registerFormData: RegisterFormDataType,
  ): Promise<ResponseI> {
    return api.post("/auth/register", registerFormData);
  }

  public async logout(): Promise<ResponseI> {
    return api.get("/auth/logout");
  }
}

const authService: AuthServiceI = new AuthService();

export default authService;
export type { AuthServiceI };
