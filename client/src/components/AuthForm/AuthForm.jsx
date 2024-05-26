import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";
import cl from "./AuthForm.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useContext, useState } from "react";
import { Context } from "../../store";
import { LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { login, registration } from "../../http/userAPI";

const AuthForm = observer(() => {
   const { userStore } = useContext(Context);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const location = useLocation();
   const isLogin = location.pathname === LOGIN_ROUTE;

   const navigate = useNavigate();

   const handleClick = async (event) => {
      try {
         let data;
         if (isLogin) {
            data = await login(email, password);
         } else {
            data = await registration(email, password);
         }

         navigate(SHOP_ROUTE);
         setTimeout(() => {
            userStore.setIsAuth(true);
            userStore.setUser(userStore);
         }, 0);
      } catch (e) {
         alert(e.response.data.message);
      }
   };

   return (
      <div className={cl.form}>
         <h2 className="m-auto mb-1">{isLogin ? "Login" : "Registration"}</h2>

         <Form className="d-flex justify-content-between flex-column">
            <Row className="d-flex justify-content-between ">
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Enter email"
                  />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                  />
               </Form.Group>
            </Row>

            <Button variant="dark" onClick={handleClick}>
               {isLogin ? " Sign in" : "Sign up"}
            </Button>
         </Form>
      </div>
   );
});

export default AuthForm;
