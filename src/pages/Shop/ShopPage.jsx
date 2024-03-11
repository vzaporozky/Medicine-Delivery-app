import Header from "../../components/header/Header";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import pagesStore from "../../store/pagesStore";
import Shops from "./../../components/Shops/Shops";
import cl from "./ShopPage.module.css";
import Drugs from "./../../components/Drugs/Drugs";

const ShopPage = observer(() => {
   useEffect(() => {
      pagesStore.changePage("Shop");
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
