import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import cl from "./Admin.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../../store";
import { Container } from "react-bootstrap";

const Admin = observer(() => {
   const { pagesStore } = useContext(Context);

   useEffect(() => {
      pagesStore.changePage("admin");
   }, []);

   return (
      <>
         <Header />
         <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 154 }}
         >
            fdsa
         </Container>
      </>
   );
});

export default Admin;
