import { useEffect, useState } from "react";
import "../../assets/styles/Component.css";
import ClientModal from "./ClientModal";
import ClientTable from "./ClientTable";
import {
  getAllClientes,
  postNewCliente,
  updateCliente,
  deleteCliente,
} from "../../services/apiServiceClients";

function ClientComponent({title}) {
  const [clientes, setClientes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState(null);

  // Efecto para cargar los clientes al montar el componente
  useEffect(() => {
    getAllClientes({ setClientes });
  }, []);

  // Funciones para abrir, cerrar y guardar el modal
  const openModal = (cliente) => {
    setSelectedCliente(cliente);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalSave = (data) => {
    if (selectedCliente) {
      data.idCliente = selectedCliente.idCliente;
      updateCliente(data, { setClientes });
    } else {
      postNewCliente(data, { setClientes });
    }
    closeModal();
  };

  // Función para eliminar un cliente
  const handleDelete = (idCliente) => {
    const confirmed = window.confirm(
      "¿Está seguro que desea eliminar el cliente?"
    );
    if (!confirmed) return;

    console.log("Cliente a eliminar: ", idCliente);
    deleteCliente(idCliente, { setClientes });
  };

  return (
    <div className="container">
      <h1>{title}</h1>

      {clientes.length === 0 ? (
        <h2 id="error-h2">No se han encontrado clientes!</h2>
      ) : (
        <ClientTable
          clientes={clientes}
          openModal={openModal}
          handleDelete={handleDelete}
        />
      )}

      <button
        className="new-button"
        onClick={() => {
          setSelectedCliente(null);
          setModalOpen(true);
        }}
      >
        Nuevo cliente
      </button>

      <ClientModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleModalSave}
        selectedCliente={selectedCliente}
      />
    </div>
  );
}

export default ClientComponent;
