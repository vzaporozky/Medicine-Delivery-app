import { useContext } from "react";
import { observer } from "mobx-react-lite";
import cl from "./Drugs.module.css";
import cartStore from "../../store/cartStore";
import Button from "../../ui/Button/Button";
import { Context } from "../../store";

const Drugs = observer(() => {
   const { shopStore } = useContext(Context);
   const {
      medicinesFetched,
      handleMouseEnter,
      handleMouseLeave,
      toggleFavorite,
   } = shopStore;

   const handleClickAddToCart = (medicine) => {
      const foundItem = cartStore.cart.find(
         (item) => item.name === medicine.name
      );

      if (foundItem) {
         cartStore.updateCartItemQuantity(
            medicine.name,
            foundItem.quantity + 1,
            medicine.price
         );
      } else {
         cartStore.addToCart({ ...medicine, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cartStore.cart));
   };

   return (
      <div className={cl.drugs}>
         <h2>MEDICINES</h2>

         {medicinesFetched.rows && (
            <div className={cl.medicines}>
               {medicinesFetched.rows.map((medicine) => (
                  <div className={cl.medicine} key={medicine.name}>
                     <img
                        className={cl.image}
                        src="./src/assets/vitamin_c.jpg"
                        alt="image"
                     />
                     <p>
                        {medicine.name}{" "}
                        <span style={{ color: "rgb(117, 117, 213)" }}>
                           {medicine.price} грн.
                        </span>
                     </p>

                     <Button handleClick={() => handleClickAddToCart(medicine)}>
                        Add to Cart
                     </Button>

                     <div
                        className={`${cl.favorite_button} ${
                           medicine.isFavorite
                              ? cl.isFavorite
                              : cl.isNotFavorite
                        }`}
                        onClick={(el) => toggleFavorite(el, medicine)}
                        onMouseEnter={(el) => handleMouseEnter(el, medicine)}
                        onMouseLeave={(el) => handleMouseLeave(el, medicine)}
                     >
                        <svg
                           version="1.0"
                           xmlns="http://www.w3.org/2000/svg"
                           width="1280.000000pt"
                           height="1189.000000pt"
                           viewBox="0 0 1280.000000 1189.000000"
                           preserveAspectRatio="xMidYMid meet"
                           className={cl.svg}
                        >
                           <g
                              transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                              fill="#000000"
                              stroke="none"
                           >
                              <path
                                 d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001
-2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360
634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346
-2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178
408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19
196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998
-193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417
-535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535
610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"
                              />
                           </g>
                        </svg>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
});

export default Drugs;
