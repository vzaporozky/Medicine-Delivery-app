import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./LoginPage.module.css";
import LoginForm from "./../../components/LoginForm/LoginForm";
import { useContext, useEffect } from "react";
import { Context } from "../../store";
import { Container } from "react-bootstrap";

const LoginPage = observer(() => {
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
            <LoginForm />
         </Container>
      </>
   );
});

export default LoginPage;
