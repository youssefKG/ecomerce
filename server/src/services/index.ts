import ValidationService, { IValidationService } from "./validate.service";
import TokenService, { ITokenService } from "./jwtToken.service";
import { PrismaClient } from "@prisma/client";
import PasswordService, { IPasswordService } from "./password.service";
import UserRepository, {
  IUserRepository,
} from "../repositories/UserRepositories";

const passwordService: IPasswordService = new PasswordService();
const prisma: PrismaClient = new PrismaClient();
const tokenService: ITokenService = new TokenService();
const validationService: IValidationService = new ValidationService();
const userRepository: IUserRepository = new UserRepository(prisma);

export {
  passwordService,
  prisma,
  tokenService,
  validationService,
  userRepository,
};
