import { createBrowserRouter } from "react-router-dom";
import ShopPage from "../pages/Shop/ShopPage";
import CartPage from "../pages/Cart/CartPage";
import ErrorPage from "../pages/Error/Error";
import AuthPage from "../pages/AuthPage/AuthPage";

import {
   CART_ROUTE,
   LOGIN_ROUTE,
   REGISTRATION_ROUTE,
   SHOP_ROUTE,
} from "../utils/consts";

export const authRouts = createBrowserRouter([
   {
      path: SHOP_ROUTE,
      element: <ShopPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: CART_ROUTE,
      element: <CartPage />,
   },
]);

export const publicRouts = createBrowserRouter([
   {
      path: SHOP_ROUTE,
      element: <ShopPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: CART_ROUTE,
      element: <CartPage />,
   },
   {
      path: LOGIN_ROUTE,
      element: <AuthPage />,
   },
   {
      path: REGISTRATION_ROUTE,
      element: <AuthPage />,
   },
]);
