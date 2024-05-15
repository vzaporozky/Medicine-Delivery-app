import Header from "../../components/header/Header";
import pagesStore from "../../store/pagesStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Form from "../../components/Form/Form";
import cl from "./LoginPage.module.css";
import Cart from "../../components/Cart/Cart";
import Submit from "../../components/Submit/Submit";

const LoginPage = observer(() => {
   // useEffect(() => {
   //    pagesStore.changePage("Cart");
   // }, []);

   return (
      <>
         <Header />
         <div className={cl.wrapper}>Login</div>
         <Submit />
      </>
   );
});

export default LoginPage;
