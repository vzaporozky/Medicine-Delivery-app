import { Link, useRouteError } from "react-router-dom";
import Header from "../../components/header/Header";

export default function ErrorPage() {
   const error = useRouteError();

   return (
      <>
         <Header />
         <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
               <i>{error.statusText || error.message}</i>
            </p>

            <Link to="/">Return to the Shop</Link>
         </div>
      </>
   );
}
