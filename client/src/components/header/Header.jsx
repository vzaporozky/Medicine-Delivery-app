import cl from "./Header.module.css";
import LinkTo from "../../ui/LinkTo/LinkTo";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../store";

const Header = observer(() => {
   const { userStore } = useContext(Context);

   return (
      <>
         {userStore ? (
            <div className={cl.header}>
               <LinkTo to="/" name="Shop" />
               {userStore.isAuth ? (
                  <>
                     <span> | </span>
                     <LinkTo to="/cart" name="Cart" />
                  </>
               ) : (
                  <>
                     <span> | </span>
                     <LinkTo to="/login" name="login" />
                     <span> | </span>
                     <LinkTo to="/registration" name="registration" />
                  </>
               )}
            </div>
         ) : (
            <p>loading..</p>
         )}
      </>
   );
});

export default Header;
