import Skeleton from "@mui/material/Skeleton";
import "./index.css";

const CardsSkeleton = () => {
  return (
    <div className="card-skeleton-container">
      <Skeleton variant="rectangular" width={280} height={220} />
      <Skeleton variant="text" width={210} />
      <Skeleton variant="text" width={210} />
    </div>
  );
};

export default CardsSkeleton;
