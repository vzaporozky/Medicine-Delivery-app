import cl from "./Button.module.css";

const Button = ({ ...props }) => {
   return (
      <button className={cl.button} onClick={props.handleClick}>
         {props.children}
      </button>
   );
};

export default Button;
