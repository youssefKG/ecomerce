import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import "./index.css";
type AuthButtonProps = {
  children: string;
};
const AuthButton = ({ children }: AuthButtonProps) => {
  return <button className="btn-auth">{children}</button>;
};
type HeartButtonProps = { isRed: boolean };
const HeartButton = ({ isRed }: HeartButtonProps) => {
  return (
    <button className="heart-btn">
      {isRed ? (
        <FaHeart className="red-heart" />
      ) : (
        <CiHeart className="heart-icon" />
      )}
    </button>
  );
};
export { AuthButton, HeartButton };
