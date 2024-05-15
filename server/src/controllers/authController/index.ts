import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validateRegisterFormData, validateLoginFormData } from "../../utils";
import {
  LoginFormDataType,
  RegisterFormDataType,
  LoginFormValidationErrorsType,
  RegisterFormValidationErrorsType,
} from "../../types";
import { UserType } from "../../types";

interface RegisterDataType extends UserType {
  password: string;
  confirmPassword: string;
}

interface User extends UserType {
  password: string;
  confirmPassword?: string;
  isLogin: boolean;
  salt: string;
}

const prisma = new PrismaClient();

class Auth {
  public async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const { email, password }: LoginFormDataType = req.body;

    const validationErrors: LoginFormValidationErrorsType =
      validateLoginFormData({
        email,
        password,
      });

    console.log(email, password);

    if (validationErrors.isValid) {
      res.status(403).json({
        success: false,
        result: validationErrors,
        message: "validation rules not match",
      });
      return;
    }

    const findUser: User | null = await prisma.user.findUnique({
      where: { email },
    });

    if (!findUser) {
      res.status(401).json({
        success: false,
        message: "No account with this email has been register",
        result: null,
      });
      return;
    }

    const isMatch: boolean = await bcrypt.compare(
      password + findUser.salt,
      findUser.password,
    );

    if (!isMatch) {
      res
        .status(401)
        .json({ success: false, message: "Wrong credentials", result: null });
      return;
    }

    const token: string = jwt.sign(
      {
        id: findUser?.id,
        firstName: findUser?.firstName,
        lastName: findUser?.lastName,
        email: findUser?.email,
        adress: findUser?.adress,
        role: findUser?.role,
      },
      process.env.JWT_SECRET || "",
    );

    await prisma.user.update({
      where: { email },
      data: { isLogin: true },
    });

    res
      .status(200)
      .cookie("totib-token", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
      })
      .json({
        success: true,
        result: {
          id: findUser?.id,
          firstName: findUser?.firstName,
          lastName: findUser?.lastName,
          email: findUser?.email,
          adress: findUser?.adress,
          role: "ADMIN",
        },
      });
  }

  public async register(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      }: RegisterFormDataType = req.body;

      const validationErrors: RegisterFormValidationErrorsType =
        validateRegisterFormData({
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        });

      // validate register form data
      if (
        validationErrors.email !== "" ||
        validationErrors.firstName !== "" ||
        validationErrors.lastName !== "" ||
        validationErrors.password !== "" ||
        validationErrors.confirmPassword !== ""
      ) {
        res.status(403).json({
          success: false,
          result: validationErrors,
          message: "validation rules not match!",
        });
        return;
      }

      //check if this account is already exisit
      const existingUser: User | null = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        res.status(400).json({
          success: false,
          message: "account with this email already exists",
          result: null,
        });
        return;
      }

      // hash the password and create the salt
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password + salt);

      // create a new account
      const newAccount: User | null = await prisma.user.create({
        data: {
          firstName,
          lastName,
          imgURL: "",
          role: "USER",
          email,
          adress: "",
          password: hashPassword,
          salt,
          isLogin: false,
        },
      });

      res.status(200).json({
        success: true,
        message: "account created successfuly!",
        result: null,
      });
    } catch (err) {
      next(err);
    }
  }

  public async continueWithGoogle(
    req: Request<never, never>,
    res: Response,
    next: NextFunction,
  ) {}

  public async logout(
    req: Request<never, never, never>,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const updatedUser: User | null = await prisma.user.update({
        where: { email: req.currentUser.email },
        data: { isLogin: false },
      });

      if (!updatedUser) {
        res.status(400).json({
          success: false,
          message: "only registered users can log out",
          result: null,
        });
        return;
      }

      if (!updatedUser.isLogin) {
        res.status(400).json({
          success: false,
          message: "only log in users can logout",
        });
        return;
      }

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
export default Auth;
