import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("../pages/Home/index"));
const BlogDetail = lazy(() => import("../pages/BlogDetail/index"));
const Contact = lazy(() => import("../pages/Contact/index"));
const Login = lazy(() => import("../pages/Login/index"));
const Products = lazy(() => import("../pages/Products/index"));
const ProductDetail = lazy(() => import("../pages/ProductDetail/index"));
const AcountSettings = lazy(() => import("../pages/AcountSettings/index"));
const Cart = lazy(() => import("../pages/Cart/index"));
const Checkout = lazy(() => import("../pages/Checkout/index"));
const Blogs = lazy(() => import("../pages/Blogs/index"));
const BlogSettings = lazy(() => import("../pages/BlogDetail/index"));
const DefaultLayout = lazy(() => import("../layouts/defaultLayout/index"));
const AccoutLayout = lazy(() => import("../layouts/AccountLayout"));
const EditAccount = lazy(() => import("../pages/EditAccount"));
import ProtectedRoutes from "./ProtectedRoutes";
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
      {
        path: "/product-detail/:product_id",
        Component: ProductDetail,
      },
      { path: "/checkout", Component: Checkout },
      { path: "/blogs", Component: Blogs },
      {
        path: "",
        Component: ProtectedRoutes,
        children: [
          { path: "/cart", Component: Cart },
          {
            path: "/account",
            Component: AccoutLayout,
            children: [{ path: "", Component: EditAccount }],
          },
        ],
      },
      { path: "/blog-settings", Component: BlogSettings },
      { path: "/blog-detail", Component: BlogDetail },
    ],
  },
  { path: "/sign-in", Component: Login },
  { path: "/acount-settings", Component: AcountSettings },
]);

export default router;
