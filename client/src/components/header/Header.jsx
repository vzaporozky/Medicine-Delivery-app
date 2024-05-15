import { Link } from "react-router-dom";
import cl from "./Header.module.css";
import LinkTo from "../../ui/LinkTo/LinkTo";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../../main";

const Header = observer(() => {
   const { userStore } = useContext(Context);

   // if (!user) return <p>loading</p>;

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
                     <LinkTo to="/login" name="Log In" />
                     <span> | </span>
                     <LinkTo to="/registration" name="Sign Up" />
                  </>
               )}
            </div>
         ) : (
            <p>loading</p>
         )}
      </>
   );
});

export default Header;
