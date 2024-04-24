import { Router } from "express";
import Auth from "../../controllers/authController";
import { catchError } from "../../handlers/errorHandler";

const route = Router();
const user = new Auth();
route.post("/auth/login", catchError(user.login));
route.post("/auth/register", catchError(user.register));

export default route;
