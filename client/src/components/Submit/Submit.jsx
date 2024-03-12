import { observer } from "mobx-react-lite";
import cl from "./Submit.module.css";
import Button from "./../../ui/Button/Button";
import cartStore from "../../store/cartStore";
import { useEffect } from "react";

const Submit = observer(() => {
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
