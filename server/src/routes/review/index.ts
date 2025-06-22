import { Router } from "express";
import { container } from "tsyringe";
import ReviewController, { IReviewController } from "../../controllers/Review";
import { verifyToken } from "../../middlewares";

const route: Router = Router();

const reviewController = container.resolve(ReviewController);

route.get(
  "/get-reviews/:productId",
  reviewController.productReviews.bind(reviewController),
);

route.post(
  "/",
  verifyToken,
  reviewController.createReview.bind(reviewController),
);

route.put(
  "/like",
  verifyToken,
  reviewController.likeReview.bind(reviewController),
);

route.put(
  "/dislike",
  verifyToken,
  reviewController.dislikeReview.bind(reviewController),
);

export default route;
