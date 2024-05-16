import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./normalize.css";
import "./App.css";
import { authRouts, publicRouts } from "./router/router";
import { observer } from "mobx-react-lite";
import { Context } from "./store";

const App = observer(() => {
   const { userStore } = useContext(Context);

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
