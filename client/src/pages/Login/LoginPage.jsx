import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./LoginPage.module.css";
import LoginForm from "./../../components/LoginForm/LoginForm";

const LoginPage = observer(() => {
   return (
      <>
         <Header />
         <div className={cl.wrapper}>
            <LoginForm />
         </div>
      </>
   );
});

export default LoginPage;
