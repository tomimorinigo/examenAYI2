import { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  deleteEmpleado,
  getEmpleados,
  postNewEmpleado,
  updateEmpleado,
} from "../scripts/apiService";
import EmployeeTable from "./EmployeeTable";
import "../assets/styles/EmployeeComponent.css";

function EmployeeComponent({ title }) {
  const [empleados, setEmpleados] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);

  // Efecto para cargar los empleados al montar el componente
  useEffect(() => {
    getEmpleados({setEmpleados});
  }, []);

  // Funciones para abrir, cerrar y guardar el modal
  const openModal = (empleado) => {
    setSelectedEmpleado(empleado);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalSave = (data) => {
    if (selectedEmpleado) {
      data.legajo = selectedEmpleado.legajo;
      updateEmpleado(data, {setEmpleados});
    } else {
      postNewEmpleado(data, {setEmpleados});
    }
    closeModal();
  };

  // Función para eliminar un empleado
  const handleDelete = (legajo) => {
    const confirmed = window.confirm("¿Está seguro que desea eliminar el empleado?");
    if (!confirmed) return;
    
    console.log("Empleado a eliminar: ", legajo);
    deleteEmpleado(legajo, {setEmpleados});
  };

  return (
    <div className="container">
      <h1>{title}</h1>

      {empleados.length === 0 ? (
        <h2 id="error-h2">No se han encontrado empleados!</h2>
      ) : (
        <EmployeeTable
          empleados={empleados}
          openModal={openModal}
          handleDelete={handleDelete}
        />
      )}

      <button
        className="new-button"
        onClick={() => {
          setSelectedEmpleado(null);
          setModalOpen(true);
        }}
      >
        Nuevo
      </button>
        
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleModalSave}
        selectedEmpleado={selectedEmpleado}
      />
    </div>
  );
}

export default EmployeeComponent;