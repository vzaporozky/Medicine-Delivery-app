import { Link } from "react-router-dom";
import cl from "./Header.module.css";
import LinkTo from "../../ui/LinkTo/LinkTo";
import { observer } from "mobx-react-lite";

const Header = observer(() => {
   return (
      <div className={cl.header}>
         <LinkTo to="/" name="Shop" />
         <span> | </span>
         <LinkTo to="/cart" name="Cart" />
      </div>
   );
});

export default Header;
