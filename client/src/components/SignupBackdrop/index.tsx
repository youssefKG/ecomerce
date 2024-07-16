import { useContext, useState } from "react";
import { RegisterFormDataType } from "../../types";
import { AuthContext } from "../../context/AuthContextProvider";
import authService from "../../services/authentication";
import { validateRegisterFormData } from "../../utils/validate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcGoogle, FaFacebook } from "../../assets/icons";
import { Divider, Dialog } from "@mui/material";
import "./index.css";
import { ResponseI } from "../../api";
import { useSnackbar } from "notistack";

const SignupBackdrop = () => {
  const { backdropAuth, setBackdropAuth, handleOpenLoginBackdrop } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleFormSubmit = async (
    values: RegisterFormDataType,
    _,
  ): Promise<void> => {
    try {
      setIsLoading(true);
      const response: ResponseI = await authService.register(values);

      enqueueSnackbar(response.data.message, { variant: "success" });
      handleOpenLoginBackdrop();
    } catch (err) {
      enqueueSnackbar(err.response.data.message, { variant: "error" });
      console.log(err);
    } finally {
      setIsLoading(false);
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
                  className="input-field font-medium text-sm"
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
                className="input-field font-medium text-sm"
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
                className="input-field font-medium text-sm"
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
                className="input-field font-medium text-sm"
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
            <button disabled={isLoading} type="submit" className="login-btn">
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </Dialog>
  );
};

export default SignupBackdrop;
