import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { NotificationContext } from "../../context/NotificationContextProvider";
import { LoginFormDataType } from "../../types";
import { RotatingLines } from "react-loader-spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateLoginFormData } from "../../utils/validate";
import Dialog from "@mui/material/Dialog";
import { Divider } from "@mui/material";
import { FaFacebook, FcGoogle } from "../../assets/icons";
import { ResponseI } from "../../api";
import authService from "../../services/authentication";
import "./index.css";

const LoginBackDrop = () => {
  const {
    backdropAuth,
    setBackdropAuth,
    setCurrentUser,
    handleOpenRegisterBackdrop,
  } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormSubmit = async (
    values: LoginFormDataType,
    _,
  ): Promise<void> => {
    try {
      console.log("clicked");
      setIsLoading(true);

      const response: ResponseI = await authService.login(values);
      console.log(response);

      setCurrentUser(response.data.result);
      localStorage.setItem("currentUser", JSON.stringify(response.data.result));
      showNotification("success", response.data.message);
      setBackdropAuth({ isLoginOpen: false, isSignupOpenf: false });
    } catch (err) {
      showNotification("error", err.response.data.message);
      setCurrentUser(null);
      console.log(err);
    } finally {
      setIsLoading(false);
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
            email: "yousseftaoussi2003@gmail.com",
            password: "Taoussi@2003",
          }}
          validate={validateLoginFormData}
          onSubmit={handleFormSubmit}
        >
          <Form className="form">
            <div className="text-input-container">
              <Field
                className="input-field font-medium text-sm"
                name="email"
                type="email"
                placeholder="email"
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
                className="input-field font-medium text-sm"
                name="password"
                type="password"
                placeholder="password"
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

            <button type="submit" disabled={isLoading} className="login-btn">
              {isLoading ? (
                <RotatingLines
                  visible={true}
                  width="20"
                  strokeWidth="3"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  strokeColor="gray"
                />
              ) : (
                <p>Login</p>
              )}
            </button>
          </Form>
        </Formik>
      </div>
    </Dialog>
  );
};
export default LoginBackDrop;
