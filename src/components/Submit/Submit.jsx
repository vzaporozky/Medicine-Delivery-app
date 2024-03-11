import { observer } from "mobx-react-lite";
import cl from "./Submit.module.css";
import Button from "./../../ui/Button/Button";
import cartStore from "../../store/cartStore";

const Submit = observer(() => {
   return (
      <div className={cl.submit_form}>
         <p className={cl.price}>Total price: {cartStore.totalPrice}</p>
         <Button>Submit</Button>
      </div>
   );
});

export default Submit;
