import { SnackbarProvider } from "notistack";
import { AuthContextProvider, ShoppingCartContextProvider } from "./";
const GlobalConextProvider = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      dense
      autoHideDuration={1500}
    >
      <AuthContextProvider>
        <ShoppingCartContextProvider>{children}</ShoppingCartContextProvider>
      </AuthContextProvider>
    </SnackbarProvider>
  );
};
export default GlobalConextProvider;
