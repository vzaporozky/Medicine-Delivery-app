import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./LoginForm.module.css";
import LinkTo from "../../ui/LinkTo/LinkTo";
import Button from "react-bootstrap/Button";

const LoginForm = observer(() => {
   return (
      <div className={cl.form}>
         <div className={cl.form_wrapper}>
            <p className={cl.form_text}>LogIn</p>

            <div className={cl.form_inputs}>
               <input
                  className={cl.form_email}
                  type="text"
                  placeholder="Enter your Email"
               />
               <input
                  className={cl.form_password}
                  type="password"
                  placeholder="Enter your Password"
               />
            </div>

            <div className={cl.form_footer}>
               <div>
                  <p>Don't have account? </p>
                  <LinkTo to="/register" name="Registration" />
               </div>

               <Button variant="dark">Log In</Button>
            </div>
         </div>
      </div>
   );
});

export default LoginForm;
