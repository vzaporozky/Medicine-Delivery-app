import { useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
   const navigate = useNavigate();

   useEffect(() => {
      navigate("/shop");
   }, []);

   return <></>;
}

export default App;
