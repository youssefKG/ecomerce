import ValidationService from "./validate.service";
import ReviewRepository from "../repositories/reviewRepository";
import TokenService from "./jwtToken.service";
import { PrismaClient } from "@prisma/client";
import PasswordService, { IPasswordService } from "./password.service";
import UserRepository from "../repositories/userRepository";
import ProductRepository from "../repositories/productRepository";
import CartRepository from "../repositories/cartRepository";
import { autoInjectable, injectable } from "tsyringe";
import "reflect-metadata";

@autoInjectable()
class Database extends PrismaClient {}

const Prisma: PrismaClient = new PrismaClient();
export {
  Database,
  PasswordService,
  IPasswordService,
  CartRepository,
  UserRepository,
  ProductRepository,
  TokenService,
  ValidationService,
  ReviewRepository,
  Prisma,
};
