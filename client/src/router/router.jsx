import { createBrowserRouter } from "react-router-dom";
import ShopPage from "../pages/Shop/ShopPage";
import CartPage from "../pages/Cart/CartPage";
import ErrorPage from "../pages/Error/Error";
import LoginPage from "../pages/Login/LoginPage";
import RegistrationPage from "../pages/Register/RegistrationPage";

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

export const publicRouts = createBrowserRouter([
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
   {
      path: "/login",
      element: <LoginPage />,
   },
   {
      path: "/registration",
      element: <RegistrationPage />,
   },
]);
