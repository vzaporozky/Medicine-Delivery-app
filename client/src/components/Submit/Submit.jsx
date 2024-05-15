import { observer } from "mobx-react-lite";
import cl from "./Submit.module.css";
import Button from "./../../ui/Button/Button";
import { useContext, useEffect } from "react";
import { Context } from "../../main";

const Submit = observer(() => {
   const { cartStore } = useContext(Context);

   useEffect(() => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      let price = 0;

      cart.forEach((item) => (price += item.price * item.quantity));
      cartStore.setTotalPrice(price);
   }, []);

   return (
      <div className={cl.submit_form}>
         <p className={cl.price}>Total price: {cartStore.totalPrice} грн.</p>
         <Button>Submit</Button>
      </div>
   );
});

export default Submit;
