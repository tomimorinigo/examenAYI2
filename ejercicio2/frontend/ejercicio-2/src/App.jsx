import "./App.css";
import { useState } from "react";
import Login from "./components/Auth/Login";
import ProductComponent from "./components/Products/ProductComponent";
import ClientComponent from "./components/Clients/ClientComponent";
import { handleLogin, handleLogout, checkLocalStorage } from "./scripts/handlingAuth";

// Debe mostrarse el título de las tablas (“Listado de Productos” y “Listado de Clientes”)

function App() {
  const productosTITLE = "Listado de Productos";
  const clientesTITLE = "Listado de Clientes";

  const [isLogged, setIsLogged] = useState(checkLocalStorage);

  return (
    <>
      {
        // tomas 123
        isLogged ? (
          <div className="main-container">
            <ProductComponent title={productosTITLE} />
            <ClientComponent title={clientesTITLE} />
            <button className="logout-button" onClick={()=> handleLogout({setIsLogged})}>
              <i className="fas fa-user-circle"></i>
              <p>Cerrar sesión</p>
            </button>
          </div>
        ) : (
          <Login onLogin={()=> handleLogin({setIsLogged})} />
        )
      }
    </>
  );
}

export default App;
