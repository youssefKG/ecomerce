import { RotatingLines } from "react-loader-spinner";
import "./index.css";
const Laoding = () => {
  return (
    <div className="laoding-container">
      <RotatingLines
        visible={true}
        width="36"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        strokeColor="gray"
      />
    </div>
  );
};
export default Laoding;
