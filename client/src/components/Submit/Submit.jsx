import { observer } from "mobx-react-lite";
import cl from "./Submit.module.css";
import Button from "./../../ui/Button/Button";
import { useContext, useEffect } from "react";
import { Context } from "../../store";

const Submit = observer(() => {
   const { cartStore, shopStore } = useContext(Context);

   useEffect(() => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      let price = 0;

      cart.forEach((item) => (price += item.price * item.quantity));
      cartStore.setTotalPrice(price);
   }, []);

   return (
      <div className={cl.submit_form}>
         <p className={cl.price}>
            Total price: {cartStore.totalPrice} {shopStore.currency}.
         </p>
         <Button>Submit</Button>
      </div>
   );
});

export default Submit;
