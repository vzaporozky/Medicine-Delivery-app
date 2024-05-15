import React, { useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import "./normalize.css";
import "./App.css";
import { authRouts, notAuthRouts } from "./router/router";

function App() {
   // const navigate = useNavigate();
   const isAuth = true;

   // useEffect(() => {
   //    navigate("/shop");
   // }, []);

   return (
      <>
         {isAuth ? (
            <RouterProvider router={authRouts} />
         ) : (
            <RouterProvider router={notAuthRouts} />
         )}
         {/* {!isAuth && } */}
      </>
   );
}

export default App;
