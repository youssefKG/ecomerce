import { Request, Response, NextFunction } from "express";
import { IReviewRepository } from "../../repositories";

interface IReviewController {
  createReview: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  productReviews: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  likeReview: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

class ReviewController implements IReviewController {
  private reviewRepository: IReviewRepository;

  constructor(reviewRepository: IReviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  public async createReview(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
    } catch (err) {
      next(err);
    }
  }

  public async likeReview(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
    } catch (err) {
      next(err);
    }
  }

  public async productReviews(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
    } catch (err) {
      next(err);
    }
  }
}

export default ReviewController;
export { IReviewController };
