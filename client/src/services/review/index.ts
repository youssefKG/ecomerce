import api, { ResponseI } from "../../api";
import { FormReviewType } from "../../types";

interface ReviewDataI extends FormReviewType {
  productId: string;
}

interface ReviewServiceI {
  getReviews: (productId: string) => Promise<ResponseI>;
  toggleReviewLike: (value: boolean) => Promise<ResponseI>;
  postReview: (formReview: ReviewDataI) => Promise<ResponseI>;
}

class ReviewService implements ReviewServiceI {
  public async getReviews(productId: string): Promise<ResponseI> {
    return api.get(`/review/get-reviews/${productId}`);
  }

  public async postReview(formReview: ReviewDataI): Promise<ResponseI> {
    return api.post("/review/", formReview);
  }

  public async toggleReviewLike(value: boolean): Promise<ResponseI> {
    return api.put("/review/like", value);
  }
}

const reviewService: ReviewServiceI = new ReviewService();

export default reviewService as ReviewService;
export type { ReviewServiceI };
