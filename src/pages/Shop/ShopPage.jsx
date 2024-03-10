import Header from "../../components/header/Header";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import pagesStore from "../../store/pagesStore";
import Shops from "./../../components/Shops/Shops";

const ShopPage = observer(() => {
   useEffect(() => {
      pagesStore.changePage("Shop");
   }, []);

   return (
      <>
         <Header />
         <Shops />
      </>
   );
});

export default ShopPage;
