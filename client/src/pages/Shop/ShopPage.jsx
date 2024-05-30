import Header from "../../components/header/Header";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Shops from "./../../components/Shops/Shops";
import cl from "./ShopPage.module.css";
import Clocks from "../../components/Clocks/Clocks";
import { Context } from "../../store";
import { fetchShops, fetchClocks } from "../../http/clock";

const ShopPage = observer(() => {
   const { pagesStore, shopStore } = useContext(Context);

   useEffect(() => {
      pagesStore.changePage("Shop");

      fetchShops().then((data) => shopStore.setShopsFetched(data));
      fetchClocks(shopStore.currentShop).then((data) =>
         shopStore.setClocksFetched(data)
      );
   }, []);

   return (
      <>
         <Header />

         <div className={cl.wrapper}>
            <Shops />
            <Clocks />
         </div>
      </>
   );
});

export default ShopPage;
