import { observer } from "mobx-react-lite";
import cl from "./Form.module.css";

const formLabels = ["Name", "Email", "Phone", "Address"];

const Form = observer(() => {
   return (
      <div className={cl.form}>
         <h2>Form</h2>

         <div>
            {formLabels.map((label) => (
               <div className={cl.input}>
                  <p>{label}</p>
                  <input type="text" placeholder="input" />
               </div>
            ))}
         </div>
      </div>
   );
});

export default Form;
