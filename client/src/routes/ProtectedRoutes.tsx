import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  return localStorage.getItem("currentUser") ? (
    <Outlet />
  ) : (
    <Navigate to="/?isAuthenticated=false" />
  );
};
export default ProtectedRoutes;
