import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { FcGoogle, FaFacebook } from "../../assets/icons";
import * as authService from "../../auth";
import Dialog from "@mui/material/Dialog";
import { Divider } from "@mui/material";
import { AuthResponseType, RegisterFormDataType } from "../../types";
import { isStrongPassword, isValidEmail } from "../../utils";
import "./index.css";

const SignupBackdrop = () => {
  const { backdropAuth, setBackdropAuth, handleOpenLoginBackdrop } =
    useContext(AuthContext);
  const [formData, setFormData] = useState<RegisterFormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLaoding, setIsLaoding] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e): Promise<void> => {
    e.preventDefault();
    if (isLaoding) return;
    setIsLaoding(true);

    if (!isValidEmail(formData.email)) {
      console.log("not a valid email");
      return;
    }

    if (!isStrongPassword) {
      console.log("is not a strong password ");
      return;
    }

    const response: AuthResponseType = await authService.register(formData);
    if (response) {
      if (response?.success) {
        setIsLaoding(false);
        setTimeout(() => {
          setSuccessMessage(response.message);
          setErrorMessage(null);
          handleOpenLoginBackdrop(); // open login when if the account is created
        }, 2000);
      } else {
        setSuccessMessage(null);
        setErrorMessage(response?.message);
      }
      console.log("response from register backdrop", response);
    }
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
          <button onClick={handleOpenLoginBackdrop}>
            <p>
              Dont have an account?<span>Login ?</span>
            </p>
          </button>
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
          <button type="submit" disabled={isLaoding} className="login-btn">
            Sign Up
          </button>
          {errorMessage && (
            <p className="register-error-message">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="register-success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </Dialog>
  );
};
export default SignupBackdrop;
