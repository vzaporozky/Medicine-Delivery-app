import Header from "../../components/header/Header";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Form from "./../../components/Form/Form";
import cl from "./CartPage.module.css";
import Cart from "./../../components/Cart/Cart";
import Submit from "./../../components/Submit/Submit";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";

const CartPage = observer(() => {
   const { pagesStore, userStore } = useContext(Context);
   console.log(userStore.isAuth);

   if (!userStore.isAuth) {
      const navigate = useNavigate();
      useEffect(() => {
         navigate("/login");
      }, []);
   }
   useEffect(() => {
      pagesStore.changePage("Cart");
   }, []);

   return (
      <>
         <Header />
         <div className={cl.wrapper}>
            <Form />
            <Cart />
         </div>
         <Submit />
      </>
   );
});

export default CartPage;
