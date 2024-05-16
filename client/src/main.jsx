import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import pagesStore from "./store/pagesStore";
import shopStore from "./store/shopStore";
import cartStore from "./store/cartStore";
import UserStore from "./store/userStore";
import { Context } from "./store";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Context.Provider
         value={{
            userStore: UserStore,
            pagesStore: pagesStore,
            shopStore: shopStore,
            cartStore: cartStore,
         }}
      >
         <App />
      </Context.Provider>
   </React.StrictMode>
);
