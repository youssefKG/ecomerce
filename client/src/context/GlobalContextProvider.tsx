import { SnackbarProvider } from "notistack";
import { AuthContextProvider } from "./";

const GlobalConextProvider = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      dense
      autoHideDuration={2500}
    >
      <AuthContextProvider>{children}</AuthContextProvider>
    </SnackbarProvider>
  );
};

export default GlobalConextProvider;
