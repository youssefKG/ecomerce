import { useContext } from "react";
import { AuthContext } from "../context";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
