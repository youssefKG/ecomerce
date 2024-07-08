import { Request, Response, NextFunction } from "express";
import { User } from "../../types";
import { inject, injectable, container } from "tsyringe";
import jwt from "jsonwebtoken";
import { UserRepository } from "../../services";
import { CustomError } from "../../utils/errorHandler.ts";

interface DecodedDataType {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isLogin: boolean;
  role: "ADMIN" | "USER";
}

interface TokenI {
  verirfyToken: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

@injectable()
class Token implements TokenI {
  constructor(
    @inject("UserRepository") private userRepository: UserRepository,
  ) {}

  public async verirfyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token: string | null = req.cookies["totib-token"];

      if (!token) {
        next(
          new CustomError(
            "No authtication token , authorization denied",
            401,
            null,
          ),
        );
        return;
      }

      const tokenSecret = process.env.JWT_SECRET || "jwtSecret";
      const decodedData = jwt.verify(token, tokenSecret) as DecodedDataType;

      if (!decodedData) {
        next(new CustomError("Invalid authorization token", 401, null));
        return;
      }

      const user: User | null = await this.userRepository.findUserById(
        decodedData.id,
      );

      if (!user) {
        next(
          new CustomError("User not found the authorization denied", 401, null),
        );
        return;
      }

      req.currentUser = user;
      next();
    } catch (err) {
      console.log("errors", err);
      next(err);
    }
  }
}

container.register("UserRepository", { useClass: UserRepository });

const token = container.resolve(Token);

export default token.verirfyToken.bind(token);
