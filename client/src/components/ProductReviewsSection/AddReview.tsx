import { ChangeEvent } from "react";
import { FormDataOfReviewType } from "../../types";
import { Avatar, Rating } from "@mui/material";
type AddReviewProps = {
  formData: FormDataOfReviewType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleRating: (e: unknown, newValue: number | null) => void;
};
const AddReview = ({
  formData,
  handleChange,
  handleRating,
}: AddReviewProps) => {
  return (
    <div className="add-review-container">
      <Avatar
        sx={{ width: 50, height: 50 }}
        src="https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-homme-affaires-image-masculine-de-profil-avatar-m%C3%A2le-182095609.jpg"
      />
      <form>
        <div className="user-info">
          <input
            className="firstName"
            value={formData.firstName}
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
          <input
            name="lastName"
            className=""
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <textarea
          placeholder="Write your review"
          rows={4}
          value={formData.review}
          name="review"
          onChange={handleChange}
        />
        <div className="publish">
          <div className="rating">
            <p>Your Rating</p>
            <Rating
              size="medium"
              value={formData.rate}
              onChange={handleRating}
            />
          </div>
          <button className="post-btn" type="submit">
            Post Review
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddReview;
