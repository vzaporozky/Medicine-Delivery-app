import Header from "../../components/header/Header";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
// import pagesStore from "../../store/pagesStore";
import Shops from "./../../components/Shops/Shops";
import cl from "./ShopPage.module.css";
import Drugs from "./../../components/Drugs/Drugs";
import { Context } from "../../main";

const ShopPage = observer(() => {
   const { pagesStore } = useContext(Context);
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
