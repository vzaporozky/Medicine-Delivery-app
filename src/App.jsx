import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./normalize.css";
import "./App.css";

function App() {
   const navigate = useNavigate();

   useEffect(() => {
      navigate("/shop");
   }, []);
}

export default App;
