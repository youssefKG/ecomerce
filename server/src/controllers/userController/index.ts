import { Request, Response, NextFunction } from "express";
import { injectable, inject, container } from "tsyringe";
import { updateProfilDataSchema } from "../../validators";
import { IPasswordService } from "../../services/password.service";
import { IUserRepository } from "../../repositories";
import { CurrentUser, IUpdateProfileData, User } from "../../types";
import { CustomError } from "../../utils/errorHandler.ts";

interface ReviewForm {
  firstName: string;
  lastName: string;
  email: String;
  review: String;
  rate: String;
  imgURL: String;
}

interface IUserController {
  editProfilData: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

@injectable()
class UserController implements IUserController {
  constructor(
    @inject("IUserRepository") private userRepository: IUserRepository,
    @inject("IPasswordService") private passwordService: IPasswordService,
  ) {}

  public async editProfilData(req: Request, res: Response, next: NextFunction) {
    try {
      // distruct new profil data from request body
      const updateProfileData: IUpdateProfileData = req.body;
      const user: CurrentUser | null = req.currentUser;

      // validate request body
      const updateProfilDataError = updateProfilDataSchema.validate(
        updateProfilDataSchema,
      ).error;

      // res with error if the new profil data schema is invalid
      if (updateProfilDataError)
        throw new CustomError("invalid schema", 403, updateProfilDataError);

      // compare the passwords
      const isValidPassword = this.passwordService.verifyPassword(
        updateProfileData.currentPassword,
        user.password,
      );

      if (!isValidPassword)
        throw new CustomError("the current password is incorrect!", 403, null);

      await this.userRepository.updateUser(user.email, updateProfileData);

      res.status(200).json({
        success: true,
        result: null,
        message: "The profil data updated successfully",
      });
    } catch (err) {
      next(err);
    }
  }
}

const userController: IUserController = container.resolve(UserController);

export default userController;
export type { IUserController };
