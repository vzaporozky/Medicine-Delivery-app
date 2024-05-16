import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./RegistrationPage.module.css";
import RegistrationForm from "./../../components/RegistrationForm/RegistrationForm";
import { useContext, useEffect } from "react";
import { Context } from "../../store";

const RegistrationPage = observer(() => {
   const { pagesStore } = useContext(Context);

   useEffect(() => {
      pagesStore.changePage("registration");
   }, []);

   return (
      <>
         <Header />
         <div className={cl.wrapper}>
            <RegistrationForm />
         </div>
      </>
   );
});

export default RegistrationPage;
