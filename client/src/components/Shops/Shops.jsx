import { observer } from "mobx-react-lite";
import cl from "./Shops.module.css";
import shopStore from "../../store/shopStore";
import Button from "../../ui/Button/Button";

const Shops = observer(() => {
   const handleClick = (shop) => {
      shopStore.changeShop(shop.id);
   };

   return (
      <div className={cl.shops}>
         <h2>SHOPS</h2>

         {shopStore.shops.map((shop) => (
            <div
               className={cl.shop}
               onClick={() => handleClick(shop)}
               key={shop.name}
            >
               <p className={cl.shop_name}>{shop.name}</p>
               <p>Адрес: {shop.address}</p>
            </div>
         ))}
      </div>
   );
});

export default Shops;
