import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import { Divider } from "@mui/material";
import "./index.css";
type FormDataType = {
  email: string;
  passpord: string;
};
const LoginBackDrop = () => {
  const { backdropAuth, setBackdropAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    passpord: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const email: string = formData.email;
      const password: string = formData.passpord;
      console.log(email, password);
      e.preventDefault();
    } catch (err) {
      console.log(err);
    }
  };
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
        <form onSubmit={handleFormSubmit}>
          <input
            name="email"
            className="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            type="passpord"
          />
          <input
            name="password"
            className="passport"
            placeholder="passpord"
            type="password"
            onChange={handleChange}
            value={formData.passpord}
          />
          <button className="login-btn">Login</button>
        </form>
      </div>
    </Dialog>
  );
};
export default LoginBackDrop;
