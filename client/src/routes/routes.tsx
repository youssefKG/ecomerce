import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Checkout from "../pages/Checkout/index";
import CheckoutLayout from "../layouts/CheckoutFlowLayout/";

// lazy load the components
const Home = lazy(() => import("../pages/Home/index"));
const BlogDetail = lazy(() => import("../pages/BlogDetail/index"));
const Contact = lazy(() => import("../pages/Contact/index"));
const Products = lazy(() => import("../pages/Products/index"));
const ProductDetail = lazy(() => import("../pages/ProductDetail/index"));
const AcountSettings = lazy(() => import("../pages/AcountSettings/index"));
const Cart = lazy(() => import("../pages/Cart/index"));
const Blogs = lazy(() => import("../pages/Blogs/index"));
const BlogSettings = lazy(() => import("../pages/BlogDetail/index"));
const DefaultLayout = lazy(() => import("../layouts/defaultLayout/index"));
const AccoutLayout = lazy(() => import("../layouts/AccountLayout/index"));
const EditAccount = lazy(() => import("../pages/EditAccount"));
const CheckoutFlowLayout = lazy(() => import("../layouts/CheckoutFlowLayout/"));
const Orders = lazy(() => import("../pages/Orders"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/products", Component: Products },
      { path: "/Contact", Component: Contact },
      { path: "/product-detail/:product_id", Component: ProductDetail },
      { path: "/blogs", Component: Blogs },
      { path: "/blog-settings", Component: BlogSettings },
      { path: "/blog-detail", Component: BlogDetail },
      { path: "/acount-settings", Component: AcountSettings },
      {
        path: "",
        Component: ProtectedRoutes,
        children: [
          {
            path: "",
            Component: CheckoutLayout,
            children: [
              { path: "/cart", Component: Cart },
              { path: "/checkout", Component: Checkout },
            ],
          },
          {
            path: "/account",
            Component: AccoutLayout,
            children: [
              { path: "", Component: EditAccount },
              { path: "orders", Component: Orders },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
