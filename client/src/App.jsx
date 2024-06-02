import React, { useContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./normalize.css";
import "./App.css";
import { authRouts, publicRouts } from "./router/router";
import { observer } from "mobx-react-lite";
import { Context } from "./store";
import { Spinner } from "react-bootstrap";
import { check } from "./http/userAPI";

const App = observer(() => {
   const { userStore, pagesStore, shopStore } = useContext(Context);

   useEffect(() => {
      const token = localStorage.getItem("token");
      const currency = localStorage.getItem("currency");

      if (currency != "$") shopStore.setCurrency("грн");

      if (token) {
         check()
            .then((data) => {
               userStore.setUser(true);
               userStore.setIsAuth(true);
            })
            .catch(() => {});
      }

      pagesStore.setLoading(false);
   }, []);

   if (pagesStore.loading) {
      return <Spinner animation={"grow"} />;
   }

   return (
      <>
         {userStore.isAuth ? (
            <RouterProvider router={authRouts} />
         ) : (
            <RouterProvider router={publicRouts} />
         )}
      </>
   );
});

export default App;
