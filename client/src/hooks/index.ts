import useCart, { UseCartI } from "./cart";
import useReview, { UseReviewI } from "./review";
import useProductDetail, { UseProductDetailI } from "./productDetail";
import useProducts, { UseProductsI } from "./product";
import useCheckout, { UseCheckoutI } from "./checkout";
import useDebounce from "./debounce";

export {
  useCart,
  useReview,
  useProductDetail,
  useProducts,
  useCheckout,
  useDebounce,
};

export type {
  UseCartI,
  UseReviewI,
  UseProductDetailI,
  UseProductsI,
  UseCheckoutI,
};
