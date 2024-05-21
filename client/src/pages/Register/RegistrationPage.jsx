import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./RegistrationPage.module.css";
import RegistrationForm from "./../../components/RegistrationForm/RegistrationForm";
import { useContext, useEffect } from "react";
import { Context } from "../../store";
import { Container } from "react-bootstrap";

const RegistrationPage = observer(() => {
   const { pagesStore } = useContext(Context);

   useEffect(() => {
      pagesStore.changePage("registration");
   }, []);

   return (
      <>
         <Header />
         <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 154 }}
         >
            <RegistrationForm />
         </Container>
      </>
   );
});

export default RegistrationPage;
