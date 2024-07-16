import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Laoding from "../../components/loading";
import AccountTableContent from "../../components/AccountTableContent";

const AccountLayout = () => {
  return (
    <div className="flex gap-4  bg-gray-50 h-screen content-center items-center p-8">
      <AccountTableContent />
      <Suspense fallback={<Laoding />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AccountLayout;
