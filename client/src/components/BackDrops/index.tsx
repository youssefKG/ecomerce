import { useContext } from "react";
import { Backdrop } from "@mui/material";
import SignupBackDrop from "./SignUpBackDrop";
import LoginBackDrop from "./LoginBackDrop";
import { Context } from "../../layouts/defaultLayout";
interface ContextType {
  isLoginOpen: boolean;
  isSignUpOpen: boolean;
}
const BackDropAuth = () => {
  const { isLoginOpen, isSignUpOpen } = useContext<ContextType>(Context);
  if (isLoginOpen && isSignUpOpen)
    return (
      <Backdrop
        open={isLoginOpen}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <LoginBackDrop />
      </Backdrop>
    );
  else if (!isLoginOpen && isSignUpOpen)
    return (
      <Backdrop
        open={isLoginOpen}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <SignupBackDrop />
      </Backdrop>
    );
  else if (!isLoginOpen && !isSignUpOpen) return null;
};
export default BackDropAuth;
