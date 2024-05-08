import { Request, Response, NextFunction } from "express";
import { PrismaClient, User } from "@prisma/client";
import { UserType } from "../../types";
import jwt from "jsonwebtoken";
interface JwtPayload {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isLogin: boolean;
  role: "ADMIN" | "USER";
}

const prisma = new PrismaClient();

const verirfyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const token: string | null = req.cookies.token;

    if (!token) {
      res.status(401).json({
        success: false,
        message: "No authtication token , authorization denied",
        jwtExpired: true,
        result: null,
      });
      return;
    }

    const jwtSecret = process.env.JWT_SECRET || "jwt-secret";
    const verified = jwt.verify(token, jwtSecret) as JwtPayload;

    if (!verified) {
      res.status(401).json({
        success: false,
        result: null,
        message: "Invalid authorization token",
        jwtExpired: true,
      });
      return;
    }

    const user: JwtPayload | null = await prisma.user.findUnique({
      where: {
        email: verified.email,
      },
      select: {
        isLogin: true,
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        adress: true,
        role: true,
      },
    });

    if (!user) {
      res.status(401).json({
        success: false,
        result: null,
        message: "User not found the authorization denied",
        jwtExpired: true,
      });
      return;
    }
    req.currentUser = user;
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export default verirfyToken;
