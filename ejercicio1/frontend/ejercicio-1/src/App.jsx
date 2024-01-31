import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  const TITLE = "Listado de Empleados";

  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <>
      {
        // tomas 123
        isLogged ? (
          <EmployeeComponent title={TITLE} />
        ) : (
          <Login onLogin={handleLogin} />
        )
      }
    </>
  );
}

export default App;
