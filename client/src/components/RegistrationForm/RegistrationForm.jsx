import Header from "../header/Header";
import { observer } from "mobx-react-lite";
import cl from "./RegistrationForm.module.css";
import LinkTo from "../../ui/LinkTo/LinkTo";

const RegistrationForm = observer(() => {
   return (
      <div className={cl.wrapper}>
         <div className={cl.form}>
            <div className={cl.form_wrapper}>
               <p className={cl.form_text}>Registration</p>

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
                     <p>You have account?</p>
                     <LinkTo to="/login" name="Login" />
                  </div>

                  <button className={cl.form_button}>Sign up</button>
               </div>
            </div>
         </div>
      </div>
   );
});

export default RegistrationForm;
