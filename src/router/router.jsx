import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Shop from "../pages/shop/shop";
import Cart from "../pages/cart/cart";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
   },
   {
      path: "/shop",
      element: <Shop />,
   },
   {
      path: "/cart",
      element: <Cart />,
   },
]);
