import Header from "../../components/header/Header";
import pagesStore from "../../store/pagesStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Form from "../../components/Form/Form";
import cl from "./RegisterPage.module.css";
import Cart from "../../components/Cart/Cart";
import Submit from "../../components/Submit/Submit";

const RegisterPage = observer(() => {
   // useEffect(() => {
   //    pagesStore.changePage("Cart");
   // }, []);

   return (
      <>
         <Header />
         <div className={cl.wrapper}>Register</div>
         <Submit />
      </>
   );
});

export default RegisterPage;
