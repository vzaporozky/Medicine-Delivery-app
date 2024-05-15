import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShopPage from "../pages/Shop/ShopPage";
import CartPage from "../pages/Cart/CartPage";
import ErrorPage from "../pages/Error/Error";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

export const authRouts = createBrowserRouter([
   // {
   //    path: "/",
   //    element: <App />,
   //    errorElement: <ErrorPage />,
   // },
   {
      path: "/",
      element: <ShopPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/cart",
      element: <CartPage />,
   },
]);

export const notAuthRouts = createBrowserRouter([
   // {
   //    path: "/",
   //    element: <App />,
   //    errorElement: <ErrorPage />,
   // },
   {
      path: "/",
      element: <ShopPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/login",
      element: <LoginPage />,
   },
   {
      path: "/register",
      element: <RegisterPage />,
   },
]);
