import express, { Response, NextFunction } from "express";
import { UserType } from "./user.type";
import User from "../controllers/authController";
declare global {
  namespace Express {
    export interface Request {
      session: any;
      user: UserType;
    }
  }
}
