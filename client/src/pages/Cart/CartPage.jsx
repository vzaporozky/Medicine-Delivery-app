import Header from "../../components/header/Header";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Form from "./../../components/Form/Form";
import cl from "./CartPage.module.css";
import Cart from "./../../components/Cart/Cart";
import Submit from "./../../components/Submit/Submit";
import { Context } from "../../main";

const CartPage = observer(() => {
   const { pagesStore } = useContext(Context);

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
