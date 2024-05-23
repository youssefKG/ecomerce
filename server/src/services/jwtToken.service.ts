import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isLogin: boolean;
  role: "ADMIN" | "USER";
}

interface ITokenService {
  verifyToken: (token: string) => JwtPayload | null;
  generateToken: (user: JwtPayload) => string;
}

class TokenService implements ITokenService {
  // jwt secret key
  #jwtSecretKey = process.env.JWT_SECRET || "jwt-secret-key";

  // verify Token
  public verifyToken(token: string): JwtPayload | null {
    const decodedUserData: JwtPayload | null = jwt.verify(
      token,
      this.#jwtSecretKey,
    ) as JwtPayload | null;

    if (!decodedUserData) return null;

    return decodedUserData;
  }

  // generate a token
  public generateToken(user: JwtPayload): string {
    return jwt.sign(user, this.#jwtSecretKey);
  }
}

export default TokenService;
export { ITokenService };
