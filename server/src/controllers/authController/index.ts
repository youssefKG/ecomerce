import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { allowedNodeEnvironmentFlags } from "process";
import { UserType } from "../../types";

interface RegisterDataType extends UserType {
  password: string;
  confirmPassword: string;
}

interface User extends UserType {
  password: string;
  isLogin: boolean;
  salt: string;
}

class Auth {
  private prisma = new PrismaClient();

  public async login(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    const email: string = req.body.email;
    const password: string = req.body.password;

    const findUser: User | null = await this.prisma.user.findUnique({
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

    await this.prisma.user.update({
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
      }: RegisterDataType = req.body;
      console.log(firstName, lastName, email, password, confirmPassword);
    } catch (err) {
      next(err);
    }
  }
  public async logout(): Promise<void> {
    try {
    } catch (err) {}
  }
  public signUp(req: Request, res: Response, next: NextFunction): void {}
}
export default Auth;
