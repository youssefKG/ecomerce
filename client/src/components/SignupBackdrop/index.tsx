import { useContext, useState } from "react";
import { Context } from "../../layouts/defaultLayout";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { Divider } from "@mui/material";
import "./index.css";
type typeFormDataType = {
  firstName: string;
  lastName: string;
  email: string;
};
const SignupBackdrop = () => {
  const { backdropAuth, setBackdropAuth } = useContext(Context);
  const [formData, setFormData] = useState();
  return (
    <Dialog
      open={backdropAuth.isSignupOpen}
      onClose={() =>
        setBackdropAuth({ isLoginOpen: false, isSignupOpen: false })
      }
    >
      <div className="signup-container">
        <button className="close-btn"></button>
        <div className="signup-header">
          <h1>Create An Account</h1>
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
          <div className="">
            <input className="" placeholder="First Name" />
            <input className="" placeholder="Last Name" />
          </div>
          <input className="email" placeholder="Email" type="passpord" />
          <input className="passport" placeholder="Passpord" type="password" />
          <input
            className="passport"
            placeholder="Confirm passpord"
            type="password"
          />
          <button className="login-btn">Sign Up</button>
        </form>
      </div>
    </Dialog>
  );
};
export default SignupBackdrop;
