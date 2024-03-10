import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import pagesStore from "../../store/pagesStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const Cart = observer(() => {
   useEffect(() => {
      pagesStore.changePage("Cart");
   }, []);

   return (
      <>
         <Header />
         <p>CART</p>
         <Link to="/shop">shop</Link>
      </>
   );
});

export default Cart;
