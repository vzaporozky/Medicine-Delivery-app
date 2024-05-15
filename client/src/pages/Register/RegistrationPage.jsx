import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./RegistrationPage.module.css";
import RegistrationForm from "./../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = observer(() => {
   // useEffect(() => {
   //    pagesStore.changePage("Cart");
   // }, []);

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
