import { useContext, useState } from "react";
import { AuthResponseType, RegisterFormDataType } from "../../types";
import { AuthContext } from "../../context/AuthContextProvider";
import * as authService from "../../auth";
import { validateRegisterFormData } from "../../utils/validate";
import { Formik } from "formik";
import TextInput from "../TextInput";
import { FcGoogle, FaFacebook } from "../../assets/icons";
import { Divider, Dialog } from "@mui/material";
import "./index.css";

const SignupBackdrop = () => {
  const initialeValues: RegisterFormDataType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { backdropAuth, setBackdropAuth, handleOpenLoginBackdrop } =
    useContext(AuthContext);
  const [isLaoding, setIsLaoding] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFormSubmit = async (
    values: RegisterFormDataType,
  ): Promise<void> => {
    if (isLaoding) return;
    setIsLaoding(true);

    const response: AuthResponseType = await authService.register(values);
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
        <Formik
          initialValues={initialeValues}
          validate={validateRegisterFormData}
          onSubmit={handleFormSubmit}
        >
          <div className="form">
            <div className="first-last-name">
              <TextInput
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <TextInput type="text" name="lastName" placeholder="Last Name" />
            </div>
            <TextInput name="email" placeholder="Email" type="email" />
            <TextInput name="password" placeholder="Password" type="password" />
            <TextInput
              name="confirmPassword"
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
          </div>
        </Formik>
      </div>
    </Dialog>
  );
};
export default SignupBackdrop;
