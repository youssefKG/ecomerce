import { useContext } from "react";
import { Context } from "../../layouts/defaultLayout";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { Divider } from "@mui/material";
import "./index.css";
const LoginBackDrop = () => {
  const { backdropAuth, setBackdropAuth } = useContext(Context);
  return (
    <Dialog
      open={backdropAuth.isLoginOpen}
      onClose={() => setBackdropAuth({ ...backdropAuth, isLoginOpen: false })}
    >
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
            <FaFacebook id="facebook" className="passport-icon" />
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
