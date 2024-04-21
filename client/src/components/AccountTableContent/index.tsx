import { Link } from "react-router-dom";
const AccountTableContent = () => {
  return (
    <div className="acount-siderBar">
      <div className="crumbs">
        <Link to="Home" className="">
          Home
        </Link>
        <p>/</p>
        <Link to="my-account">My Account</Link>
      </div>
    </div>
  );
};
export default AccountTableContent;
