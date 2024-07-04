import { RotatingLines } from "react-loader-spinner";
const Loading = () => {
  return (
    <div>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="gray"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loading;
