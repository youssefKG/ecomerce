import { Router } from "express";
import Authenticator from "../../controllers/authController";
import {
  userRepository,
  passwordService,
  tokenService,
  validationService,
} from "../../services";
const route = Router();

const user = new Authenticator(
  userRepository,
  validationService,
  passwordService,
  tokenService,
);

route.post("/login", user.loginUser.bind(user));
route.post("/register", user.registerUser.bind(user));
route.get("/logout", user.logoutUser.bind(user));

export default route;
