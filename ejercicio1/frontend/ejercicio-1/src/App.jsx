import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import EmployeeComponent from "./components/EmployeeComponent";
import { checkLocalStorage, handleLogin, handleLogout } from "./scripts/handlingAuth";

function App() {
  
  const TITLE = "Listado de Empleados";
  const [isLogged, setIsLogged] = useState(checkLocalStorage);

  return (
    <>
      {
        isLogged ? (
          <>
            <EmployeeComponent title={TITLE} />
            <button className="logout-button" onClick={()=> handleLogout({setIsLogged})}>
              <i className="fas fa-user-circle"></i>
              <p>Cerrar sesión</p>
            </button>
          </>
        ) : (
          <Login onLogin={()=> handleLogin({setIsLogged})} />
        )
      }
    </>
  );
}

export default App;
