import { Request, Response, NextFunction } from "express";
class UserService {
  firstName: String;
  lastName: String;
  email: String;
  private password: String;
  constructor(
    firstName: String,
    lastName: String,
    email: String,
    password: String,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  public async signIn(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  public async register(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  public async signUp(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  public async continueWithFacebook(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}
