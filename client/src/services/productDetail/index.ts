import api, { ResponseI } from "../../api";
import { FormReviewType } from "../../types";

interface ProductDetailServiceI {
  getProductDetail: (endPoint: string) => Promise<ResponseI>;
  getReviews: (productId: string) => Promise<ResponseI>;
  getSimillarProducts: (endPoint: string) => Promise<ResponseI>;
  postReview: (
    endPoint: string,
    reviewData: FormReviewType,
  ) => Promise<ResponseI>;
  toogleReviewLike: (
    endPoint: string,
    reviewData: { reviewId: string; value: boolean },
  ) => Promise<ResponseI>;
}

class productDetailService implements ProductDetailServiceI {
  public async getProductDetail(productId: string): Promise<ResponseI> {
    return api.get(`/product/product-detail/${productId}`);
  }

  public async getSimillarProducts(endPoint: string): Promise<ResponseI> {
    return api.get(endPoint);
  }

  public async getReviews(productId: string): Promise<ResponseI> {
    return api.get(`/review/get-reviews/${productId}`);
  }

  public async toogleReviewLike(
    endPoint: string,
    reviewData: { reviewId: string; value: boolean },
  ): Promise<ResponseI> {
    return api.put(endPoint, reviewData);
  }

  public async postReview(
    endPoint: string,
    reviewData: FormReviewType,
  ): Promise<ResponseI> {
    return api.post(endPoint, reviewData);
  }
}

const instanceProductDeatialService: ProductDetailServiceI =
  new productDetailService();
export default instanceProductDeatialService;

export type { ProductDetailServiceI };
