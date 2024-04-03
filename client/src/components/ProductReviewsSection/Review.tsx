import { HeartButton } from "../buttons";
import { ReviewType } from "../../types";
import { Rating, Avatar } from "@mui/material";
type ReviewProps = { reviewDetail: ReviewType };
const Review = (props: ReviewProps) => {
  return (
    <div className="review-container">
      <Avatar
        alt="profil image"
        className="img-profil"
        sx={{ width: 50, height: 50 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxkrF8qIaco5BHiHmEpzH0ot2lK_b5dCodn1Iwze6wg&s"
      />
      <div className="review-detail">
        <div className="review-header">
          <h1>{props.reviewDetail.reviewerName}</h1>
          <Rating size="small" value={props.reviewDetail.stars} />
        </div>
        <p>{props.reviewDetail.description}</p>
        <div className="date">
          <HeartButton isRed={false} />
          <p>{`${props.reviewDetail.date.getDay()}-${props.reviewDetail.date.getMonth()}-${props.reviewDetail.date.getFullYear()}`}</p>
        </div>
      </div>
    </div>
  );
};
export default Review;
