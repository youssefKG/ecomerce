import { Link } from "react-router-dom";
import "./index.css";
const AccountTableContent = () => {
  return (
    <div className="manage-account-container">
      <div className="">
        <h1>Manage My Account </h1>
        <ul>
          <li>
            <Link to="active" className="active-one">
              <p className="active-one">My Profile</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <p>Adress Book</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <p>My Payement Options </p>
            </Link>
          </li>
          <li>
            <Link to="">
              <p>Logout</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h1> My Orders </h1>
        <ul>
          <li>
            <Link to="">
              <p>My Returns</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <p>My Orders</p>
            </Link>
          </li>
          <li>
            <Link to="">
              <p>My Cancellations</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AccountTableContent;
