import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { LoginFormDataType } from "../../types";
import { RotatingLines } from "react-loader-spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validateLoginFormData } from "../../utils/validate";
import Dialog from "@mui/material/Dialog";
import { Divider } from "@mui/material";
import { FaFacebook, FcGoogle } from "../../assets/icons";
import { ResponseI } from "../../api";
import authService, { AuthServiceI } from "../../services/authentication";
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

  const handleFormSubmit = async (
    values: LoginFormDataType,
    _,
  ): Promise<void> => {
    try {
      console.log("clicked");
      setIsLoading(true);

      const response: ResponseI = await authService.login(values);

      if (response.data.success) {
        setCurrentUser(response.data.result);
        setSuccessMessage(response.data.message);
        localStorage.setItem(
          "currentUser",
          JSON.stringify(response.data.result),
        );
        setErrorMessage(null);
      }
      setIsLoading(false);
    } catch (err) {
      setErrorMessage("Email Or password incorrect !!");
      setIsLoading(false);
      setCurrentUser(null);
      setSuccessMessage(null);
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
            email: "youssefTaoussi2003@gmail.com",
            password: "Taoussi@2003",
          }}
          validate={validateLoginFormData}
          onSubmit={handleFormSubmit}
        >
          <Form className="form">
            <div className="text-input-container">
              <Field
                className="input-field"
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
                className="input-field"
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="login-success-message">{successMessage}</p>
            )}

            <button type="submit" className="login-btn">
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
