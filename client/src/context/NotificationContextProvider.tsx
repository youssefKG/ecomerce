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
      <div style={{ color: "white" }} className="text-white text-sm">
        <ToastContainer
          style={{ color: "white" }}
          position="top-center"
          draggable
          autoClose={3000}
          theme="colored"
        />
      </div>
    </NotificationContext.Provider>
  );
};

export default NotificationContextProdvider;
export { NotificationContext };
