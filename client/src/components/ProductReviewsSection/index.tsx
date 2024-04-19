import "./index.css";
import Review from "./Review.tsx";
import reviewsData from "../../utils/reviewsData.ts";
const ProductReviewsSection = () => {
  return (
    <>
      <h1>Reviews</h1>
      <div className="reviews-container">
        {reviewsData.map((rev) => (
          <Review reviewDetail={rev} key={rev.id} />
        ))}
      </div>
    </>
  );
};
export default ProductReviewsSection;
