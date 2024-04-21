import { Outlet } from "react-router-dom";
import AccountTableContent from "../../components/AccountTableContent";
import "./index.css";
const AccountLayout = () => {
  return (
    <div className="account-layout-container">
      <AccountTableContent />
      <Outlet />
    </div>
  );
};
export default AccountLayout;
