import Skeleton from "@mui/material/Skeleton";
import "./index.css";

const CardsSkeleton = () => {
  return (
    <div className="skeleton-cards-container">
      <div className="card-skeleton-container">
        <Skeleton variant="rectangular" width={210} height={200} />
        <Skeleton variant="text" width={210} />
        <Skeleton variant="text" width={210} />
      </div>
      <div className="card-skeleton-container">
        <Skeleton variant="rectangular" width={210} height={200} />
        <Skeleton variant="text" width={210} />
        <Skeleton variant="text" width={210} />
      </div>
      <div className="card-skeleton-container">
        <Skeleton variant="rectangular" width={210} height={200} />
        <Skeleton variant="text" width={210} />
        <Skeleton variant="text" width={210} />
      </div>
      <div className="card-skeleton-container">
        <Skeleton variant="rectangular" width={210} height={200} />
        <Skeleton variant="text" width={210} />
        <Skeleton variant="text" width={210} />
      </div>
      <div className="card-skeleton-container">
        <Skeleton variant="rectangular" width={210} height={200} />
        <Skeleton variant="text" width={210} />
        <Skeleton variant="text" width={210} />
      </div>
      <div className="card-skeleton-container">
        <Skeleton variant="rectangular" width={210} height={200} />
        <Skeleton variant="text" width={210} />
        <Skeleton variant="text" width={210} />
      </div>
    </div>
  );
};

export default CardsSkeleton;
