import { PrismaClient } from "@prisma/client";
import { ReviewType, CreateReviewType } from "../../types";

interface IReviewRepository {
  creatReview: (
    reviewData: CreateReviewType,
  ) => Promise<CreateReviewType | null>;
  likeReview: (reviewId: string) => Promise<ReviewType | null>;
  dislikeReview: (reviewId: string) => Promise<ReviewType | null>;
  getProductReviews: (productId: string) => Promise<ReviewType[] | null>;
}

class ReviewRepository implements IReviewRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  public async getProductReviews(
    productId: string,
  ): Promise<ReviewType[] | null> {
    try {
      const reviews: ReviewType[] = await this.prisma.review.findMany({
        where: { productId },
        take: 5,
        orderBy: { likes: "desc" },
      });

      return reviews;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async creatReview(
    reviewData: CreateReviewType,
  ): Promise<CreateReviewType | null> {
    try {
      const newReview = await this.prisma.review.create({ data: reviewData });

      return newReview;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async likeReview(reviewId: string): Promise<ReviewType | null> {
    try {
      const likedReview = await this.prisma.review.update({
        where: { id: reviewId },
        data: { likes: { increment: 1 } },
      });

      return likedReview;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async dislikeReview(reviewId: string): Promise<ReviewType | null> {
    try {
      const dislikedReview: ReviewType = await this.prisma.review.update({
        where: { id: reviewId },
        data: { dislikes: { increment: 1 } },
      });

      return dislikedReview;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default ReviewRepository;
export { IReviewRepository };
