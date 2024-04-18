import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { Divider } from "@mui/material";
import "./index.css";
type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const SignupBackdrop = () => {
  const { backdropAuth, setBackdropAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
            <input
              onChange={handleFormDataChange}
              name="firstName"
              value={formData.firstName}
              className=""
              placeholder="First Name"
            />
            <input
              onChange={handleFormDataChange}
              className=""
              name="lastName"
              value={formData.lastName}
              placeholder="Last Name"
            />
          </div>
          <input
            onChange={handleFormDataChange}
            name="email"
            value={formData.email}
            className="email"
            placeholder="Email"
            type="passpord"
          />
          <input
            onChange={handleFormDataChange}
            name="password"
            value={formData.password}
            className="password"
            placeholder="Password"
            type="password"
          />
          <input
            onChange={handleFormDataChange}
            name="confirmPassword"
            value={formData.confirmPassword}
            className="password"
            placeholder="Confirm password"
            type="password"
          />
          <button className="login-btn">Sign Up</button>
        </form>
      </div>
    </Dialog>
  );
};
export default SignupBackdrop;
