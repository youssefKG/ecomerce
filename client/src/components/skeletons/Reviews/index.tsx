import Skeleton from "@mui/material/Skeleton";
import "./index.css";

const ReviewsSkeleton = () => {
  return (
    <div className="skeleton-reviews-container">
      <div className="review-skeleton-container">
        <Skeleton variant="rounded" width={40} height={40} />
        <div className="review-detail">
          <Skeleton variant="text" width={120} height={15} />
          <Skeleton variant="text" height={10} />
          <Skeleton variant="text" height={10} />
          <Skeleton variant="text" height={10} width={80} />
        </div>
      </div>
      <div className="review-skeleton-container">
        <Skeleton variant="rounded" width={40} height={40} />
        <div className="review-detail">
          <Skeleton variant="text" width={120} height={15} />
          <Skeleton variant="text" height={10} />
          <Skeleton variant="text" height={10} />
          <Skeleton variant="text" height={10} width={80} />
        </div>
      </div>
      <div className="review-skeleton-container">
        <Skeleton variant="rounded" width={40} height={40} />
        <div className="review-detail">
          <Skeleton variant="text" width={120} height={15} />
          <Skeleton variant="text" height={10} />
          <Skeleton variant="text" height={10} />
          <Skeleton variant="text" height={10} width={80} />
        </div>
      </div>
      <div className="review-skeleton-container">
        <Skeleton variant="rounded" width={40} height={40} />
        <div className="review-detail">
          <Skeleton variant="text" width={120} height={15} />
          <Skeleton variant="text" height={10} />
          <Skeleton variant="text" height={10} />
          <Skeleton variant="text" height={10} width={80} />
        </div>
      </div>
    </div>
  );
};

export default ReviewsSkeleton;
