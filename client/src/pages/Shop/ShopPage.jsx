import Header from "../../components/header/Header";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
// import pagesStore from "../../store/pagesStore";
import Shops from "./../../components/Shops/Shops";
import cl from "./ShopPage.module.css";
import Drugs from "./../../components/Drugs/Drugs";
import { Context } from "../../store";
import { fetchClocks } from "../../http/clock";

const ShopPage = observer(() => {
   const { pagesStore, shopStore } = useContext(Context);
   useEffect(() => {
      pagesStore.changePage("Shop");

      fetchMedicines().then((data) => shopStore.setShopsFetched(data));
      fetchMedicines().then((data) => shopStore.setMedicinesFetched(data));
   }, []);

   return (
      <>
         <Header />

         <div className={cl.wrapper}>
            <Shops />
            <Drugs />
         </div>
      </>
   );
});

export default ShopPage;
