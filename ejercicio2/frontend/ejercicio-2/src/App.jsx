import "./App.css";
import { useState } from "react";
import Login from "./components/Auth/Login";
import ProductComponent from "./components/Products/ProductComponent";
import ClientComponent from "./components/Clients/ClientComponent";

// Debe mostrarse el título de las tablas (“Listado de Productos” y “Listado de Clientes”)

function App() {
  const productosTITLE = "Listado de Productos";
  const clientesTITLE = "Listado de Clientes";

  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <>
      {
        // tomas 123
        isLogged ? (
          <div className="main-container">
            <ProductComponent title={productosTITLE} />
            <ClientComponent title={clientesTITLE} />
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )
      }
    </>
  );
}

export default App;
