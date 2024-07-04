import { Skeleton } from "@mui/material";
import "./index.css";

const ProductSkeleton = () => {
  return (
    <div className="product-detail-skeleton-container">
      <div className="img-skeleton-container">
        <div className="small-imgs-skeleton">
          <Skeleton variant="rectangular" height={90} animation="wave" />
          <Skeleton variant="rectangular" height={90} animation="wave" />
          <Skeleton variant="rectangular" height={90} animation="wave" />
        </div>
        <Skeleton animation="wave" />
      </div>
      <div className="text-skeleton">
        <div className="header-skeleton">
          <Skeleton />
          <Skeleton variant="text" animation="wave" width={150} />
        </div>
        <div className="desc-skeleton">
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <Skeleton variant="text" animation="wave" />
          <div className="slides-skeleton-container">
            <div className="slide-skeleton">
              <Skeleton
                variant="circular"
                animation="wave"
                width={10}
                height={10}
              />
              <Skeleton
                height={15}
                variant="text"
                animation="wave"
                width="100%"
              />
            </div>
            <div className="slide-skeleton">
              <Skeleton
                variant="circular"
                animation="wave"
                width={10}
                height={10}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={15}
              />
            </div>
            <div className="slide-skeleton">
              <Skeleton
                variant="circular"
                animation="wave"
                width={10}
                height={15}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={15}
              />
            </div>
            <div className="slide-skeleton">
              <Skeleton
                variant="circular"
                animation="wave"
                width={10}
                height={10}
              />
              <Skeleton
                variant="text"
                animation="wave"
                height={15}
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
