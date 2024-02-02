import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  const TITLE = "Listado de Empleados";

  const checkLocalStorage = () => {
    const jwtToken = localStorage.getItem("jwtToken");
    return jwtToken !== null;
  };

  const [isLogged, setIsLogged] = useState(checkLocalStorage);

  const handleLogin = () => {
    setIsLogged(true);
  };

  // Limpia el token en el localStorage y actualiza el estado de autenticación
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setIsLogged(false);
  };

  return (
    <>
      {
        // tomas 123
        isLogged ? (
          <>
            <EmployeeComponent title={TITLE} />
            <button className="logout-button" onClick={handleLogout}>
              <i class="fas fa-user-circle"></i>
              <p>Cerrar sesión</p>
            </button>
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )
      }
    </>
  );
}

export default App;
