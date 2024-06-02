import { observer } from "mobx-react-lite";
import cl from "./Cart.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../../store";
import { REACT_APP_API_URL } from "../../utils/consts";

const Cart = observer(() => {
   const { cartStore, shopStore } = useContext(Context);

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

         <div className={cl.clocks}>
            {cartStore.cart.map((clock) => (
               <div className={cl.clock} key={clock.name + "s"}>
                  <img
                     src={REACT_APP_API_URL + "/" + clock.img}
                     className={cl.image}
                     alt="clock-image"
                  />

                  <div className={cl.description}>
                     <h4>{clock.name}</h4>
                     <p>
                        {clock.price} {shopStore.currency}
                     </p>
                     <input
                        type="number"
                        name="quantity"
                        value={clock.quantity}
                        className={cl.clock_quantity}
                        onChange={(el) => {
                           cartStore.updateCartItemQuantity(
                              clock.name,
                              Number(el.target.value),
                              clock.price
                           );
                        }}
                     />
                  </div>

                  <button
                     className={cl.remove}
                     onClick={() => removeItemFromCart(clock.name)}
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
