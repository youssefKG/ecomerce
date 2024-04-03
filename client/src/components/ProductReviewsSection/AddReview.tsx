import { Avatar, Rating } from "@mui/material";
const AddComment = () => {
  return (
    <div className="add-review-container">
      <Avatar
        sx={{ width: 50, height: 50 }}
        src="https://thumbs.dreamstime.com/b/vecteur-d-ic%C3%B4ne-homme-affaires-image-masculine-de-profil-avatar-m%C3%A2le-182095609.jpg"
      />
      <form>
        <div className="user-info">
          <input className="" placeholder="First Name" />
          <input className="" placeholder="Last Name" />
        </div>
        <textarea placeholder="Write your review" rows={4} />
        <div className="publish">
          <div className="rating">
            <p>Your Rating</p>
            <Rating size="medium" value={0} />
          </div>
          <button className="post-btn" type="submit">
            Post Review
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddComment;
