import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ShopPage from "../pages/Shop/ShopPage";
import CartPage from "../pages/Cart/CartPage";
import ErrorPage from "../pages/Error/Error";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/shop",
      element: <ShopPage />,
   },
   {
      path: "/cart",
      element: <CartPage />,
   },
]);
