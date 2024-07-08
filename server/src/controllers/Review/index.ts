import { Request, Response, NextFunction } from "express";
import { container, inject, injectable } from "tsyringe";
import {
  IReviewRepository,
  ReviewRepository,
  IProductRepository,
  ProductRepository,
} from "../../repositories";
import { CustomError } from "../../utils/errorHandler.ts";
import { ProductFieldsConfig, ReviewDataType, ReviewType } from "../../types";

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

@injectable()
class ReviewController implements IReviewController {
  constructor(
    @inject("ReviewRepository") private reviewRepository: IReviewRepository,
    @inject("ProductReposistory") private productRepository: IProductRepository,
  ) {}

  public async createReview(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { authorId, content, rate, productId }: ReviewDataType = req.body;

      if (!authorId || !rate || !content) {
        next(new CustomError("all feidls required", 400, null));
        return;
      }

      if (rate > 5 || rate < 0) {
        next(new CustomError("rate must be between 1 and 5 ", 400, null));
        return;
      }

      if (content.length < 8) {
        next(
          new CustomError(
            "the review content must be at least 8 characters",
            400,
            null,
          ),
        );
        return;
      }

      //  find the product Review
      const product: ProductFieldsConfig | null =
        await this.productRepository.getProductById(productId, {
          id: true,
        });

      // if the product that user try to review does not exist
      if (!product) {
        next(
          new CustomError(
            "the product you are trying review does not exist ",
            401,
            null,
          ),
        );
        return;
      }

      console.log(req.currentUser);
      // create a new review
      const newReview: ReviewType | null =
        await this.reviewRepository.creatReview({
          authorId: req.currentUser.id,
          productId,
          firstName: req.currentUser.firstName,
          lastName: req.currentUser.lastName,
          imgURL: req.currentUser.imgURL,
          content,
          rate,
          likes: 0,
          dislikes: 0,
        });

      res.status(200).json({
        success: true,
        result: newReview,
        message: "the review is created ",
      });
    } catch (err) {
      next(err);
      return;
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
      const productId: string = req.params.productId;

      const reviews: ReviewType[] | null =
        await this.reviewRepository.getProductReviews(productId);

      res.status(200).json({
        success: true,
        result: reviews,
        message: "product reviews",
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

container.register("reviewRepository", { useClass: ReviewRepository });
container.register("ProductReposistory", { useClass: ProductRepository });

export { IReviewController };
export default ReviewController;
