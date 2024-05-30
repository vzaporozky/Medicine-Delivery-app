import { observer } from "mobx-react-lite";
import cl from "./Shops.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../../store";
import { fetchClocks } from "../../http/clock";

const Shops = observer(() => {
   const { pagesStore, shopStore } = useContext(Context);

   const handleClick = (shop) => {
      shopStore.changeShop(shop.id);
   };

   useEffect(() => {
      pagesStore.changePage("Shop");

      fetchClocks(shopStore.currentShop).then((data) =>
         shopStore.setClocksFetched(data)
      );
   }, [shopStore.currentShop]);

   return (
      <div className={cl.shops}>
         <h2>SHOPS</h2>

         {shopStore.shopsFetched.map((shop) => (
            <div
               className={cl.shop}
               onClick={() => handleClick(shop)}
               key={shop.name}
            >
               <p className={cl.shop_name}>{shop.name}</p>
               <p>Address: {shop.address}</p>
            </div>
         ))}
      </div>
   );
});

export default Shops;
