import Header from "../header/Header";
import { observer } from "mobx-react-lite";
import cl from "./RegistrationForm.module.css";
import LinkTo from "../../ui/LinkTo/LinkTo";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const RegistrationForm = observer(() => {
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

            <Button variant="dark" type="submit" className="ml-auto">
               Submit
            </Button>
         </Form>
      </div>
      // <div className={cl.wrapper}>
      //    <div className={cl.form}>
      //       <div className={cl.form_wrapper}>
      //          <p className={cl.form_text}>Registration</p>

      //          <div className={cl.form_inputs}>
      //             <input
      //                className={cl.form_email}
      //                type="text"
      //                placeholder="Enter your Email"
      //             />
      //             <input
      //                className={cl.form_password}
      //                type="password"
      //                placeholder="Enter your Password"
      //             />
      //          </div>

      //          <div className={cl.form_footer}>
      //             <div>
      //                <p>You have account?</p>
      //                <LinkTo to="/login" name="Login" />
      //             </div>

      //             <Button variant="danger">Sign up</Button>
      //          </div>
      //       </div>
      //    </div>
      // </div>
   );
});

export default RegistrationForm;
