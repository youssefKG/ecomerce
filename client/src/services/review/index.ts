import api, { ResponseI } from "../../api";
import { FormReviewType } from "../../types";

interface ReviewServiceI {
  getReviews: (productId: string) => Promise<ResponseI>;
  toggleReviewLike: (value: boolean) => Promise<ResponseI>;
  postReview: (formReview: FormReviewType) => Promise<ResponseI>;
}

class ReviewService implements ReviewServiceI {
  public async getReviews(productId: string): Promise<ResponseI> {
    return api.get(`/review/get-reviews/${productId}`);
  }

  public async postReview(formReview: FormReviewType): Promise<ResponseI> {
    return api.post("/review/create-review", formReview);
  }

  public async toggleReviewLike(value: boolean): Promise<ResponseI> {
    return api.put("/review/like", value);
  }
}

const reviewService: ReviewServiceI = new ReviewService();

export default reviewService as ReviewService;
export type { ReviewServiceI };
