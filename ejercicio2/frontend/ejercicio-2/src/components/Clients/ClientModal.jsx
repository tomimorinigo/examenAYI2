import "../../assets/styles/Modal.css";
import { useState, useEffect } from "react";

function ClientModal({ isOpen, onClose, onSave, selectedCliente }) {
  // Estados del formulario
  const [idCliente, setIdCliente] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");
  const [apellidoCliente, setApellidoCliente] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");

  // Funciones del formulario
  const resetForm = () => {
    setIdCliente("");
    setNombreCliente("");
    setApellidoCliente("");
    setFechaIngreso("");
    setDomicilio("");
    setTelefono("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      idCliente: idCliente,
      nombreCliente: nombreCliente,
      apellidoCliente: apellidoCliente,
      fechaIngreso: fechaIngreso,
      domicilio: domicilio,
      telefono: telefono,
    });
    resetForm();
    onClose();
  };

  // Efecto para cargar los datos del empleado seleccionado a modificar
  useEffect(() => {
    if (selectedCliente) {
      setIdCliente(selectedCliente.idCliente);
      setNombreCliente(selectedCliente.nombreCliente);
      setApellidoCliente(selectedCliente.apellidoCliente);
      setFechaIngreso(selectedCliente.fechaIngreso);
      setDomicilio(selectedCliente.domicilio);
      setTelefono(selectedCliente.telefono);
    }
  }, [selectedCliente]);

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            resetForm();
            onClose();
          }}
        >
          &times;
        </span>
        <h2>Datos del Cliente</h2>
        <form onSubmit={handleSave}>
          <div>
            <label>Id</label>
            <input
              type="text"
              value={idCliente}
              disabled
              placeholder="Id (Autoincremental)"
            />
          </div>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
              required
              maxLength={25}
              placeholder="Nombre"
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
              type="text"
              value={apellidoCliente}
              onChange={(e) => setApellidoCliente(e.target.value)}
              required
              maxLength={25}
              placeholder="Apellido"
            />
          </div>
          <div>
            <label>Fecha de Ingreso</label>
            <input
              type="text"
              value={fechaIngreso}
              onChange={(e) => setFechaIngreso(e.target.value)}
              required
              maxLength={25}
              placeholder="Fecha de Ingreso (dd/mm/yyyy)"
            />
          </div>
          <div>
            <label>Domicilio</label>
            <input
              type="text"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              required
              maxLength={25}
              placeholder="Domicilio"
            />
          </div>
          <div>
            <label>Telefono</label>
            <input
              type="text"
              pattern="[0-9]*"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              maxLength={15}
              placeholder="Telefono"
            />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default ClientModal;
