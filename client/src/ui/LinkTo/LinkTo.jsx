import { Link } from "react-router-dom";
import cl from "./LinkTo.module.css";
import { observer } from "mobx-react-lite";
import mainStore from "../../store/pagesStore";

const LinkTo = observer(({ ...props }) => {
   return mainStore.pageName == props.name ? (
      <Link className={cl.link + " " + cl.active} to={props.to}>
         {props.name}
      </Link>
   ) : (
      <Link className={cl.link} to={props.to}>
         {props.name}
      </Link>
   );
});

export default LinkTo;
