import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import cl from "./LoginForm.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useContext } from "react";
import { Context } from "../../store";

const LoginForm = observer(() => {
   const { userStore } = useContext(Context);

   const navigate = useNavigate();

   const handleClick = (event) => {
      event.preventDefault();
      userStore.setIsAuth(true);
      navigate("/");
   };

   return (
      <div className={cl.form}>
         <Form>
            <Row>
               <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
               </Col>

               <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
               </Col>
            </Row>

            <Button
               variant="dark"
               type="submit"
               onClick={handleClick}
               className="ml-auto"
            >
               Sign in
            </Button>
         </Form>
      </div>
   );
});

export default LoginForm;
