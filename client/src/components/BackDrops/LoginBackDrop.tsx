import { FcGoogle, FaFacebook } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Divider, Input, DialogTitle, DialogContent } from "@mui/material";
import { Facebook } from "@mui/icons-material";
import "./index.css";
const LoginBackDrop = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="login-container">
        <button className="close-btn"></button>
        <div className="login-header">
          <h1>Login To Your Account</h1>
          <p>
            Dont have an account?<span>Sign Up</span>
          </p>
        </div>
        <div className="passport-auth">
          <button>
            <FcGoogle id="google" className="passport-icon" />
            <p>Continue with Google</p>
          </button>
          <button>
            <Facebook id="facebook" className="passport-icon" />
            <p>Continue with Facebook </p>
          </button>
        </div>
        <Divider>Or</Divider>
        <form>
          <input className="email" placeholder="Email" type="passpord" />
          <input className="passport" placeholder="passpord" type="password" />
          <button className="login-btn">Login</button>
        </form>
      </div>
    </Dialog>
  );
};
export default LoginBackDrop;
