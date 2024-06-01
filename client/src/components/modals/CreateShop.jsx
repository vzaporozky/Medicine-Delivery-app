import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store";
import { Button, Container, Form, Modal } from "react-bootstrap";

const CreateShop = ({ show, onHide }) => {
   const [value, setValue] = useState("");

   const addShop = () => {
      // createShop({ name: value }).then((data) => {
      //    setValue("");
      //    onHide();
      // });
   };

   return (
      <Modal show={show} onHide={onHide} centered>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               Add shop
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Form>
               <Form.Control
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder={"Enter shop name"}
               />
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>
               Close
            </Button>
            <Button variant="outline-success" onClick={addShop}>
               Add
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default CreateShop;
