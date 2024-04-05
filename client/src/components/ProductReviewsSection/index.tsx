import "./index.css";
import Review from "./Review.tsx";
import reviewsData from "../../utils/reviewsData.ts";
interface ProductReviewsSectionProps {}
const ProductReviewsSection = ({}: ProductReviewsSectionProps) => {
  return (
    <>
      <h1>Reviews</h1>
      <div className="reviews-container">
        {reviewsData.map((rev) => (
          <Review reviewDetail={rev} />
        ))}
      </div>
    </>
  );
};
export default ProductReviewsSection;
