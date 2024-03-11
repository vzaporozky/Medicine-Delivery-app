import { observer } from "mobx-react-lite";
import cl from "./Drugs.module.css";
import shopStore from "../../store/shopStore";
import cartStore from "../../store/cartStore";
import Button from "../../ui/Button/Button";

const Drugs = observer(() => {
   const handleClick = (medicine) => {
      cartStore.addToCart({ ...medicine, count: 1 });
      console.log(cartStore.cart);
   };

   return (
      <div className={cl.drugs}>
         <h2>DRUGS</h2>

         <div className={cl.medicines}>
            {shopStore.shops[shopStore.currentShop].medicines.map(
               (medicine) => (
                  <>
                     <div className={cl.medicine} key={medicine.price}>
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

                        <Button handleClick={() => handleClick(medicine)}>
                           Add to Cart
                        </Button>
                     </div>
                  </>
               )
            )}
         </div>
      </div>
   );
});

export default Drugs;
