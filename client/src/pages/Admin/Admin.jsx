import Header from "../../components/header/Header";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store";
import { Button, Container } from "react-bootstrap";
import CreateShop from "../../components/modals/CreateShop";
import CreateClock from "../../components/modals/CreateClock";

const Admin = observer(() => {
   const { pagesStore } = useContext(Context);
   const [shopVisible, setShopVisible] = useState(false);
   const [clockVisible, setClockVisible] = useState(false);

   useEffect(() => {
      pagesStore.changePage("admin");
   }, []);

   return (
      <>
         <Header />

         <Container className="d-flex flex-column">
            <Button
               variant={"outline-dark"}
               className="mt-4 p-2"
               onClick={() => setShopVisible(true)}
            >
               Добавить бренд
            </Button>
            <Button
               variant={"outline-dark"}
               className="mt-4 p-2"
               onClick={() => setClockVisible(true)}
            >
               Добавить устройство
            </Button>
            <CreateShop
               show={shopVisible}
               onHide={() => setShopVisible(false)}
            />
            <CreateClock
               show={clockVisible}
               onHide={() => setClockVisible(false)}
            />
         </Container>
      </>
   );
});

export default Admin;
