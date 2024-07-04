import ValidationService, { IValidationService } from "./validate.service";
import ReviewRepository, {
  IReviewRepository,
} from "../repositories/reviewRepository";
import TokenService, { ITokenService } from "./jwtToken.service";
import { PrismaClient } from "@prisma/client";
import PasswordService, { IPasswordService } from "./password.service";
import UserRepository, {
  IUserRepository,
} from "../repositories/userRepository";
import ProductRepository, {
  IProductRepository,
} from "../repositories/productRepository";
import CartRepository, {
  ICartRepository,
} from "../repositories/cartRepository";

const prisma: PrismaClient = new PrismaClient();
const passwordService: IPasswordService = new PasswordService();
const tokenService: ITokenService = new TokenService();
const validationService: IValidationService = new ValidationService();
const userRepository: IUserRepository = new UserRepository(prisma);
const productRepository: IProductRepository = new ProductRepository(prisma);
const cartRepository: ICartRepository = new CartRepository(prisma);
const reviewRepository: IReviewRepository = new ReviewRepository(prisma);

export {
  passwordService,
  prisma,
  tokenService,
  validationService,
  userRepository,
  productRepository,
  ICartRepository,
  IProductRepository,
  cartRepository,
  reviewRepository,
  IReviewRepository,
};
