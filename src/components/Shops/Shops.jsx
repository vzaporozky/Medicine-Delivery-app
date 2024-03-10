import { observer } from "mobx-react-lite";
import cl from "./Shops.module.css";
import shopStore from "../../store/shopStore";

const Shops = observer(() => {
   // const handleClick = () => {shopStore.changeShop()};

   return (
      <div className={cl.wrapper}>
         <div className={cl.shops}>
            <h2>SHOPS</h2>

            {shopStore.shops.map((shop) => (
               <div className={cl.shop}>
                  <p>{shop.name}</p>
                  <p>Адрес:{shop.address}</p>
               </div>
            ))}
         </div>

         <div className={cl.drugs}>
            <h2>DRUGS</h2>

            <div className={cl.medicines}>
               {shopStore.shops[shopStore.currentShop].medicines.map(
                  (medicine) => (
                     <>
                        <div className={cl.medicine}>
                           <img
                              className={cl.image}
                              src="./src/assets/vitamin_c.jpg"
                              alt="image"
                           />
                           <p>{medicine}</p>
                        </div>
                     </>
                  )
               )}
            </div>
         </div>
      </div>
   );
});

export default Shops;
