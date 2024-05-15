import React, { useContext, useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import "./normalize.css";
import "./App.css";
import { authRouts, publicRouts } from "./router/router";
import { observer } from "mobx-react-lite";
import { Context } from "./main";

const App = observer(() => {
   const { userStore } = useContext(Context);

   if (!userStore) return <>Loading..</>;

   // useEffect(() => {
   //    if (!userStore) return <>Loading..</>;
   // }, []);

   return (
      <>
         {userStore.isAuth ? (
            <RouterProvider router={authRouts} />
         ) : (
            <RouterProvider router={publicRouts} />
         )}
         {/* <RouterProvider router={publicRouts} /> */}
      </>
   );
});

export default App;
