import { Router, IRouter } from "express";
import { container } from "tsyringe";
import userController, {
  IUserController,
} from "../../controllers/userController";

const userRoute: IRouter = Router();

export default userRoute;
