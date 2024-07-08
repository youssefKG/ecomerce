import { Router } from "express";
import { container } from "tsyringe";
import Authenticator from "../../controllers/authController";

const route = Router();

const user = container.resolve(Authenticator);

route.post("/login", user.loginUser.bind(user));
route.post("/register", user.registerUser.bind(user));
route.get("/logout", user.logoutUser.bind(user));

export default route;
