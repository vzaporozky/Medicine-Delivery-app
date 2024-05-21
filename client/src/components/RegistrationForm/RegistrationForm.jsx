import { observer } from "mobx-react-lite";
import cl from "./RegistrationForm.module.css";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useContext } from "react";
import { Context } from "../../store";

const RegistrationForm = observer(() => {
   const { userStore } = useContext(Context);

   const handleClick = (event) => {
      event.preventDefault();
      userStore.setIsAuth(true);
   };

   return (
      <div className={cl.form}>
         <Form>
            <Row>
               <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
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
               Sign up
            </Button>
         </Form>
      </div>
   );
});

export default RegistrationForm;
