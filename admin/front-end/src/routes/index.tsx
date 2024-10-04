import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";
import Dashboard from "../pages/dashboard";
import Products from "../pages/products";
import DefaultLayout from "../layouts/defaultLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        path: "/",
        Component: Dashboard,
      },
      {
        path: "/products",
        Component: Products,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
