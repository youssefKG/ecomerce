import { ChangeEvent } from "react";
import { FormReviewType } from "../../types";
import { Avatar, Rating } from "@mui/material";

interface AddReviewProps {
  postReview: (reviewData: FormReviewType) => void;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStarRatingChange: (event: any, newVlaue: number) => void;
  formReview: FormReviewType;
  isPostReviewLoading: boolean;
}

const formData: FormReviewType = {
  content: "",
  rate: 4,
};

const AddReview = ({ postReview }: AddReviewProps) => {
  return (
    <div className="add-review-container">
      <Avatar
        sx={{ width: 50, height: 50 }}
        src="https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-homme-affaires-image-masculine-de-profil-avatar-m%C3%A2le-182095609.jpg"
      />
      <div className="form-review-container">
        <textarea
          placeholder="Write your review"
          rows={4}
          name="review"
          onChange={() => {}}
        />
        <div className="publish">
          <div className="rating">
            <p>Your Rating</p>
            <Rating size="medium" onChange={() => {}} />
          </div>
          <button className="post-btn" onClick={() => postReview(formData)}>
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
