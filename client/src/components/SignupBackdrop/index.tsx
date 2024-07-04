import { useContext, useState } from "react";
import { AuthResponseType, RegisterFormDataType } from "../../types";
import { AuthContext } from "../../context/AuthContextProvider";
import * as authService from "../../auth";
import { validateRegisterFormData } from "../../utils/validate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcGoogle, FaFacebook } from "../../assets/icons";
import { Divider, Dialog } from "@mui/material";
import "./index.css";

const SignupBackdrop = () => {
  const { backdropAuth, setBackdropAuth, handleOpenLoginBackdrop } =
    useContext(AuthContext);
  const [isLaoding, setIsLaoding] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFormSubmit = async (
    values: RegisterFormDataType,
    _,
  ): Promise<void> => {
    try {
      console.log(values);
      if (isLaoding) return;
      setIsLaoding(true);

      const response: AuthResponseType = await authService.register(values);
      if (response.success) {
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
    } catch (err) {
      console.log(err);
      setIsLaoding(false);
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
          initialValues={{
            firstName: "youssef",
            lastName: "taoussi",
            email: "yousseftaoussi2003@gmail.com",
            password: "Taoussi@2003",
            confirmPassword: "Taoussi@2003",
          }}
          validate={validateRegisterFormData}
          onSubmit={handleFormSubmit}
        >
          <Form className="form">
            <div className="first-last-name">
              <div className="text-input-container">
                <Field
                  name="firstName"
                  className="input-field"
                  placeholder="first name"
                />
                <ErrorMessage
                  name="firstName"
                  className="input-error-message"
                  render={(msg) => (
                    <div error-message-container>
                      <p className="input-error-message">{msg}</p>
                    </div>
                  )}
                />
              </div>
              <div className="text-input-container">
                <Field
                  name="lastName"
                  className="input-field"
                  placeholder="last name"
                />
                <ErrorMessage
                  name="lastName"
                  className="input-error-message"
                  render={(msg) => (
                    <div error-message-container>
                      <p className="input-error-message">{msg}</p>
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="text-input-container">
              <Field
                className="input-field"
                name="email"
                placeholder="email"
                type="email"
              />
              <ErrorMessage
                name="email"
                className="input-error-message"
                render={(msg) => (
                  <div error-message-container>
                    <p className="input-error-message">{msg}</p>
                  </div>
                )}
              />
            </div>
            <div className="text-input-container">
              <Field
                name="password"
                placeholder="Password"
                className="input-field"
                type="password"
              />
              <ErrorMessage
                name="password"
                className="input-error-message"
                render={(msg) => (
                  <div error-message-container>
                    <p className="input-error-message">{msg}</p>
                  </div>
                )}
              />
            </div>
            <div className="text-input-container">
              <Field
                name="confirmPassword"
                className="input-field"
                placeholder="Confirm password"
                type="password"
              />
              <ErrorMessage
                name="confirmPassword"
                className="input-error-message"
                render={(msg) => (
                  <div error-message-container>
                    <p className="input-error-message">{msg}</p>
                  </div>
                )}
              />
            </div>
            <button type="submit" className="login-btn">
              Sign Up
            </button>
            {errorMessage && (
              <p className="register-error-message">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="register-success-message">{successMessage}</p>
            )}
          </Form>
        </Formik>
      </div>
    </Dialog>
  );
};

export default SignupBackdrop;
