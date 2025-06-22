import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "tsyringe";
import { User } from "@prisma/client";
import {
  LoginFormDataType,
  RegisterFormDataType,
  LoginFormDataErrorsType,
  RegisterFormDataErrorsType,
} from "../../types";
import { IUserRepository } from "../../repositories";
import {
  ValidationService,
  TokenService,
  IPasswordService,
} from "../../services";
import { CustomError } from "../../utils/errorHandler.ts";

interface IAuthenticator {
  loginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  registerUser: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  logoutUser: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

@injectable()
class Authenticator implements IAuthenticator {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository,
    @inject(ValidationService) private validationService: ValidationService,
    @inject("IPasswordService") private passwordService: IPasswordService,
    @inject(TokenService) private tokenService: TokenService,
  ) {}

  public async loginUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      // destructurt the email and password from req body
      const { email, password }: LoginFormDataType = req.body;

      // validate user data
      const validationErrors: LoginFormDataErrorsType =
        this.validationService.validateLoginFormData({ email, password });

      // if validation fail responde with error
      if (!this.validationService.isEmpty(validationErrors))
        throw new CustomError(
          "validation rules not match from",
          403,
          validationErrors,
        );

      // find user by email
      const userWithEmail: User | null =
        await this.userRepository.findByEmail(email);

      // if there is no account with this email respond with error
      if (!userWithEmail)
        throw new CustomError(
          "No account with email has been register",
          401,
          null,
        );

      // compare the password with hash password with salt
      const isPasswordValid: boolean = this.passwordService.verifyPassword(
        password,
        userWithEmail.password,
      );

      // respond with 401 error if the password does not match the hash with salt
      if (!isPasswordValid)
        throw new CustomError("Wrong credentials", 401, null);

      // generate jwt token
      const token: string = this.tokenService.generateToken({
        id: userWithEmail.id,
        firstName: userWithEmail.firstName,
        lastName: userWithEmail.lastName,
        email: userWithEmail.email,
        imgURL: userWithEmail.imgURL,
        role: userWithEmail.role,
        isLogin: userWithEmail.isLogin,
      });

      // asign the cookie in the borwser and response with user information
      res
        .status(200)
        .cookie("totib-token", token, {
          maxAge: 1000 * 60 * 60 * 24,
          httpOnly: true,
        })

        .json({
          success: true,
          result: {
            id: userWithEmail.id,
            firstName: userWithEmail.firstName,
            lastName: userWithEmail.lastName,
            email: userWithEmail.email,
            adress: userWithEmail?.adress,
            role: "ADMIN",
          },
        });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  public async registerUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      // destructure user information from req body
      const { firstName, lastName, email, password }: RegisterFormDataType =
        req.body;

      // validate user data
      const validationErrors: RegisterFormDataErrorsType =
        this.validationService.validateRegisterFormData(req.body);

      // if validation fail respond with 403 error
      if (!this.validationService.isEmpty(validationErrors))
        throw new CustomError(
          "validation rules not match",
          403,
          validationErrors,
        );

      // find a account whith this email
      const userWithTheSameEmail: User | null =
        await this.userRepository.findByEmail(email);

      // if there is account  account with the same email res with 400 status  error message
      if (userWithTheSameEmail)
        throw new CustomError(
          "account with this email already exist!",
          400,
          null,
        );

      // generate the salte and create the hash password
      const hashPassword: string = this.passwordService.hashPassword(password);

      // create a new user
      await this.userRepository.createUser({
        firstName,
        lastName,
        imgURL: "",
        role: "USER",
        email,
        adress: "",
        password: hashPassword,
        salt: "",
        isLogin: true,
      });

      // res with 200 status code and success message
      res.status(200).json({
        success: true,
        message: "account created successfuly!",
        result: null,
      });
    } catch (err) {
      console.log(err);
      // catch an error and pass it to global error handler
      next(err);
    }
  }

  public async logoutUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      // destructure email from req obj
      const email: string = req.currentUser.email;

      res.status(200).clearCookie("totib-token").json({
        success: true,
        message: "logout successfuly",
        result: null,
        jwtExpire: true,
      });
    } catch (err) {
      next(err);
    }
  }
}

export default Authenticator;
export { IAuthenticator };
