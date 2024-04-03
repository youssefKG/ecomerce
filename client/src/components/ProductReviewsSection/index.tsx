import "./index.css";
import AddReview from "./AddReview";
import Review from "./Review.tsx";
import reviewsData from "../../utils/reviewsData.ts";
const ProductReviewsSection = () => {
  return (
    <section className="product-reviews-section">
      <h1>Reviews</h1>
      <div className="reviews-container">
        {reviewsData.map((rev) => (
          <Review reviewDetail={rev} />
        ))}
      </div>
      <AddReview />
    </section>
  );
};
export default ProductReviewsSection;
