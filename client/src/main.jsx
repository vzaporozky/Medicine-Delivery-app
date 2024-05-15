import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import pagesStore from "./store/pagesStore";
import shopStore from "./store/shopStore";
import cartStore from "./store/cartStore";
import UserStore from "./store/userStore";

import App from "./App";
import "./index.css";

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Context.Provider
         value={{
            userStore: new UserStore(),
            pagesStore: new pagesStore(),
            shopStore: new shopStore(),
            cartStore: new cartStore(),
         }}
      >
         <App />
      </Context.Provider>
   </React.StrictMode>
);
