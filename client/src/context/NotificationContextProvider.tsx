import { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext(null);

const NotificationContextProdvider = ({ children }) => {
  const showNotification = (
    type: "error" | "success" | "info",
    message: string,
  ): void => {
    toast[type](message);
  };

  return (
    <NotificationContext.Provider
      value={{
        showNotification,
      }}
    >
      {children}
      <ToastContainer
        className="text-white text-sm"
        position="top-center"
        draggable
        autoClose={3000}
        theme="colored"
      />
    </NotificationContext.Provider>
  );
};

export default NotificationContextProdvider;
export { NotificationContext };
