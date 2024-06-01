import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";

import { Context } from "../../store";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = observer(() => {
   const [currency, setCurrency] = useState("eng");
   const { userStore, shopStore } = useContext(Context);

   useEffect(() => {
      if (shopStore.currency != "$") {
         setCurrency("ukr");
      } else {
         setCurrency("eng");
      }
   }, []);

   const changeCurrency = (event) => {
      if (currency == "eng") {
         setCurrency("ukr");
         shopStore.setCurrency("грн");
         localStorage.setItem("currency", "грн");
      } else {
         setCurrency("eng");
         shopStore.setCurrency("$");
         localStorage.setItem("currency", "$");
      }
   };

   const logOut = (event) => {
      userStore.setUser({});
      userStore.setIsAuth(false);
      localStorage.setItem("token", "");
   };

   return (
      <Navbar expand="lg" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand as={Link} to="/">
               Shop
            </Navbar.Brand>

            {userStore.isAuth ? (
               <Nav className="ml-auto">
                  <Button variant={"outline-warning"} onClick={changeCurrency}>
                     {currency}
                  </Button>
                  <Nav.Link as={Link} to="/cart">
                     Cart
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin">
                     Admin
                  </Nav.Link>
                  <Button
                     variant={"outline-danger"}
                     as={Link}
                     to="/"
                     onClick={logOut}
                  >
                     Exit
                  </Button>
               </Nav>
            ) : (
               <Nav className="ml-auto">
                  <Button variant={"outline-warning"} onClick={changeCurrency}>
                     {currency}
                  </Button>
                  <Nav.Link as={Link} to="/cart">
                     Cart
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                     Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/registration">
                     Registration
                  </Nav.Link>
               </Nav>
            )}
         </Container>
      </Navbar>
   );
});

export default Header;
