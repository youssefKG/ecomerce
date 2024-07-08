import "./index.css";
import { HeartButton } from "../buttons";
import { ReviewType } from "../../types";
import { Rating, Avatar } from "@mui/material";
import { FaHeart, CiHeart } from "../../assets/icons";
import { ReviewsSkeleton } from "../skeletons/index.tsx";

interface ReviewsSectionI {
  toggleLike: (reviewId: string, value: boolean) => Promise<void>;
  reviews: ReviewType[];
  isLoading: boolean;
}
const ProductReviewsSection = ({
  toggleLike,
  reviews,
  isLoading,
}: ReviewsSectionI) => {
  return (
    <>
      <h1>Reviews</h1>
      <div className="reviews-container">
        {isLoading ? (
          <ReviewsSkeleton />
        ) : (
          reviews.map((rev) => (
            <div className="review-container">
              <Avatar
                alt="profil image"
                className="img-profil"
                sx={{ width: 50, height: 50 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxkrF8qIaco5BHiHmEpzH0ot2lK_b5dCodn1Iwze6wg&s"
              />
              <div className="review-detail">
                <div className="review-header">
                  <h1>
                    {rev.firstName} {rev.lastName}
                  </h1>
                  <Rating size="small" value={rev.rate} />
                </div>
                <p>{rev.content}</p>
                <div className="date">
                  <button
                    className="heart-btn"
                    onClick={() => toggleLike(rev.id, true)}
                  >
                    {rev.likes ? (
                      <FaHeart className="red-heart" />
                    ) : (
                      <CiHeart className="heart-icon" />
                    )}
                  </button>
                  <HeartButton isRed={false} />
                  <p>{rev.created_at}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProductReviewsSection;
