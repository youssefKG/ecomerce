import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

interface ReviewForm {
  firstName: string;
  lastName: string;
  email: String;
  review: String;
  rate: String;
  imgURL: String;
}
class UserSer {
  private client = new PrismaClient();
  public async addToFavoris(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const reviewForm: ReviewForm | null = req.body;

      if (!reviewForm) {
        res.status(401).json({
          success: false,
          message: "all fields are required",
          result: null,
        });
        return;
      }

      if (reviewForm?.firstName.length < 4 || reviewForm?.lastName) {
        res.status(400).json({
          success: false,
          message:
            "first name and last name need to be at least 3 characters long",
          result: null,
        });
        return;
      }

      if (reviewForm.review.length < 18) {
        res.status(401).json({
          success: false,
          message: "reviw content need to be at least 16 characters long",
          result: null,
        });
        return;
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  public async addReview(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
    } catch (err) {
      console.log(err);
    }
  }
}
