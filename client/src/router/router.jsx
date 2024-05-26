import { createBrowserRouter } from "react-router-dom";
import ShopPage from "../pages/Shop/ShopPage";
import CartPage from "../pages/Cart/CartPage";
import ErrorPage from "../pages/Error/Error";
import Auth from "../pages/Auth/Auth";
import Admin from "../pages/Admin/Admin";

import {
   ADMIN_ROUTE,
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
   {
      path: ADMIN_ROUTE,
      element: <Admin />,
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
      element: <Auth />,
   },
   {
      path: REGISTRATION_ROUTE,
      element: <Auth />,
   },
]);
