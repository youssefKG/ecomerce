import { useContext, useState } from "react";
import * as authService from "../../auth";
import { AuthContext } from "../../context/AuthContextProvider";
import { AuthResponseType, LoginFormDataType } from "../../types";
import TextInput from "../TextInput";
import { Formik } from "formik";
import { validateLoginFormData } from "../../utils/validate";
import { continueWithGoogle } from "../../api/index";
import Dialog from "@mui/material/Dialog";
import { Divider } from "@mui/material";
import { FaFacebook, FcGoogle } from "../../assets/icons";
import "./index.css";

const LoginBackDrop = () => {
  const {
    backdropAuth,
    setBackdropAuth,
    setCurrentUser,
    handleOpenRegisterBackdrop,
  } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const initialValues: LoginFormDataType = { email: "", password: "" };

  const handleFormSubmit = async (
    values: LoginFormDataType,
    actions,
  ): Promise<void> => {
    try {
      console.log(values, actions);
      if (isLoading) return;

      setIsLoading(true);

      const response: AuthResponseType = await authService.login(values);

      setCurrentUser(response);
      setSuccessMessage(response.message);
      setErrorMessage(null);
      setIsLoading(false);
    } catch (err) {
      setErrorMessage("Email Or password incorrect !!");
      setIsLoading(false);
      setCurrentUser(null);
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
          <button onClick={handleOpenRegisterBackdrop}>
            <p>
              Dont have an account?<span>Sign Up</span>
            </p>
          </button>
        </div>
        <div className="passport-auth">
          <button onClick={continueWithGoogle}>
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
          initialValues={initialValues}
          validate={validateLoginFormData}
          onSubmit={handleFormSubmit}
        >
          <div className="form">
            <TextInput
              name="email"
              type="email"
              placeholder="exemple@gmail.com"
            />
            <TextInput name="password" type="password" placeholder="Password" />
            <button type="submit" className="login-btn">
              Login
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="login-success-message">{successMessage}</p>
            )}
          </div>
        </Formik>
      </div>
    </Dialog>
  );
};
export default LoginBackDrop;
