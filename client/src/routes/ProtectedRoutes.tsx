import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import { CurrentUserType } from "../types";

type AuthContextType = {
  currentUser: CurrentUserType;
};

const ProtectedRoutes = () => {
  const { currentUser }: AuthContextType = useContext(AuthContext);
  return currentUser ? <Outlet /> : <Navigate to="/?isAuthenticated=false" />;
};
export default ProtectedRoutes;
