import Header from "../../components/header/Header";
import pagesStore from "../../store/pagesStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Form from "./../../components/Form/Form";
import cl from "./CartPage.module.css";
import Cart from "./../../components/Cart/Cart";

const CartPage = observer(() => {
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
      </>
   );
});

export default CartPage;
