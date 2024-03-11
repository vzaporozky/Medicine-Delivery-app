import { observer } from "mobx-react-lite";
import cl from "./Cart.module.css";
import cartStore from "../../store/cartStore";

const Cart = observer(() => {
   return (
      <div className={cl.cart}>
         <h2>CART</h2>

         <div className={cl.medicines}>
            {cartStore.cart.map((drug) => (
               <div className={cl.medicine}>
                  <img
                     src="./src/assets/vitamin_c.jpg"
                     className={cl.image}
                     alt="drug-image"
                  />
                  <div className={cl.description}>
                     <h4>{drug.name}</h4>
                     <p>{drug.price}</p>
                     <input
                        type="number"
                        name="count"
                        value={drug.count}
                        className={cl.medicine_count}
                     />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
});

export default Cart;
