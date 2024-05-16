import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./LoginPage.module.css";
import LoginForm from "./../../components/LoginForm/LoginForm";
import { useContext, useEffect } from "react";
import { Context } from "../../store";

const LoginPage = observer(() => {
   const { pagesStore } = useContext(Context);

   useEffect(() => {
      pagesStore.changePage("login");
   }, []);

   return (
      <>
         <Header />
         <div className={cl.wrapper}>
            <LoginForm />
         </div>
      </>
   );
});

export default LoginPage;
