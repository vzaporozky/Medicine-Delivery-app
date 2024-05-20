import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { Context } from "../../store";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = observer(() => {
   const { userStore } = useContext(Context);

   return (
      <Navbar expand="lg" bg="dark" variant="dark">
         <Container>
            <Navbar.Brand as={Link} to="/">
               Shop
            </Navbar.Brand>

            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  {userStore.isAuth ? (
                     <Nav.Link as={Link} to="/cart">
                        Cart
                     </Nav.Link>
                  ) : (
                     <>
                        <Nav.Link as={Link} to="/login">
                           Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/registration">
                           Registration
                        </Nav.Link>
                     </>
                  )}
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
});

export default Header;
