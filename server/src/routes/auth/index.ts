import { Router } from "express";
import Auth from "../../controllers/authController";

const route = Router();
const user = new Auth();

route.post("/login", user.login);
route.post("/register", user.register);

export default route;
