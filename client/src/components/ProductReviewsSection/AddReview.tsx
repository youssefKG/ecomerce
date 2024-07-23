import { ChangeEvent } from "react";
import { FormReviewType } from "../../types";
import { Avatar, Rating } from "@mui/material";

interface AddReviewProps {
  postReview: () => Promise<void>;
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStarsRatingChange: (event: any, newVlaue: number) => void;
  formReview: FormReviewType;
  isPostReviewLoading: boolean;
}

const AddReview = ({
  postReview,
  handleChange,
  formReview,
  handleStarsRatingChange,
}: AddReviewProps) => {
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
          name="content"
          value={formReview.content}
          onChange={handleChange}
        />
        <div className="publish">
          <div className="rating">
            <p>Your Rating</p>
            <Rating size="medium" onChange={handleStarsRatingChange} />
          </div>
          <button
            className="font-medium py-1 px-3 shadow hover:opacity-95 transition rounded text-white text-sm tracking-wide bg-gray-700 "
            onClick={postReview}
          >
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
