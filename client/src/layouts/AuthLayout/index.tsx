import React from "react";
import "./index.css";
interface PropsType {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: PropsType) => {
  return <div>{children}</div>;
};
export default AuthLayout;
