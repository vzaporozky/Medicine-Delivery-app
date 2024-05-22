import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import cl from "./AuthForm.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useContext } from "react";
import { Context } from "../../store";
import { LOGIN_ROUTE } from "../../utils/consts";

const AuthForm = observer(() => {
   const { userStore } = useContext(Context);

   const location = useLocation();
   const isLogin = location.pathname === LOGIN_ROUTE;

   const navigate = useNavigate();

   const handleClick = (event) => {
      event.preventDefault();
      userStore.setIsAuth(true);
      navigate("/");
   };

   return (
      <div className={cl.form}>
         <h2 className="m-auto mb-1">{isLogin ? "Login" : "Registration"}</h2>

         <Form className="d-flex justify-content-between flex-column">
            <Row className="d-flex justify-content-between ">
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
               </Form.Group>
            </Row>

            <Button variant="dark" type="submit" onClick={handleClick}>
               {isLogin ? " Sign in" : "Sign up"}
            </Button>
         </Form>
      </div>
   );
});

export default AuthForm;
