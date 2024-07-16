import { SnackbarProvider } from "notistack";
import { AuthContextProvider } from "./";
import NotificationContextProdvider from "./NotificationContextProvider";

const GlobalConextProvider = ({ children }) => {
  return (
    <NotificationContextProdvider>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        dense
        autoHideDuration={2500}
      >
        <AuthContextProvider>{children}</AuthContextProvider>
      </SnackbarProvider>
    </NotificationContextProdvider>
  );
};

export default GlobalConextProvider;
