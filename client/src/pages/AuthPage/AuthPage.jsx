import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./AuthPage.module.css";
import AuthForm from "../../components/AuthForm/AuthForm";
import { useContext, useEffect } from "react";
import { Context } from "../../store";
import { Container } from "react-bootstrap";

const AuthPage = observer(() => {
   const { pagesStore } = useContext(Context);

   useEffect(() => {
      pagesStore.changePage("login");
   }, []);

   return (
      <>
         <Header />
         <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 154 }}
         >
            <AuthForm />
         </Container>
      </>
   );
});

export default AuthPage;
