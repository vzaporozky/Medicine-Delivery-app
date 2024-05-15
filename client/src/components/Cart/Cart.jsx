import { observer } from "mobx-react-lite";
import cl from "./Cart.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../../main";

const Cart = observer(() => {
   const { cartStore } = useContext(Context);

   useEffect(() => {
      const cartStored = localStorage.getItem("cart");
      if (cartStored) {
         const parsedCart = JSON.parse(cartStored);
         cartStore.setCart(parsedCart);
      }
   }, []);

   const removeItemFromCart = (name) => {
      cartStore.removeItem(name);
   };

   return (
      <div className={cl.cart}>
         <h2>CART</h2>

         <div className={cl.medicines}>
            {cartStore.cart.map((drug) => (
               <div className={cl.medicine} key={drug.name + "s"}>
                  <img
                     src="./src/assets/vitamin_c.jpg"
                     className={cl.image}
                     alt="drug-image"
                  />

                  <div className={cl.description}>
                     <h4>{drug.name}</h4>
                     <p>{drug.price} грн.</p>
                     <input
                        type="number"
                        name="quantity"
                        value={drug.quantity}
                        className={cl.medicine_quantity}
                        onChange={(el) => {
                           cartStore.updateCartItemQuantity(
                              drug.name,
                              Number(el.target.value),
                              drug.price
                           );
                        }}
                     />
                  </div>

                  <button
                     className={cl.remove}
                     onClick={() => removeItemFromCart(drug.name)}
                  >
                     X
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
});

export default Cart;
