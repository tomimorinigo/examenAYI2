import "../assets/styles/Modal.css";
import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, onSave, selectedEmpleado }) => {
  
  // Estados del formulario
  const [legajo, setLegajo] = useState("");
  const [nombreEmpleado, setNombreEmpleado] = useState("");
  const [apellidoEmpleado, setApellidoEmpleado] = useState("");
  const [cargo, setCargo] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [antiguedadAnios, setAntiguedadAnios] = useState("");

  // Funciones del formulario
  const resetForm = () => {
    setLegajo("");
    setNombreEmpleado("");
    setApellidoEmpleado("");
    setCargo("");
    setSucursal("");
    setAntiguedadAnios("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      nombreEmpleado,
      apellidoEmpleado,
      legajo,
      cargo,
      sucursal,
      antiguedadAnios,
    });
    resetForm();
    onClose();
  };

  // Efecto para cargar los datos del empleado seleccionado a modificar
  useEffect(() => {
    if (selectedEmpleado) {
      setLegajo(selectedEmpleado.legajo); // Ver si va el toString o no
      setNombreEmpleado(selectedEmpleado.nombreEmpleado);
      setApellidoEmpleado(selectedEmpleado.apellidoEmpleado);
      setCargo(selectedEmpleado.cargo);
      setSucursal(selectedEmpleado.sucursal);
      setAntiguedadAnios(selectedEmpleado.antiguedadAnios.toString());
    }
  }, [selectedEmpleado]);

  // Renderizado del componente
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
        <h2>Datos del Empleado</h2>
        <form onSubmit={handleSave}>
          <div>
            <label>Legajo:</label>
            <input
              type="text"
              pattern="[0-9]*"
              value={legajo}
              onChange={(e) => setLegajo(e.target.value)}
              required
              disabled={selectedEmpleado}
            />
          </div>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={nombreEmpleado}
              onChange={(e) => setNombreEmpleado(e.target.value)}
              required
              maxLength={25}
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              value={apellidoEmpleado}
              onChange={(e) => setApellidoEmpleado(e.target.value)}
              required
              maxLength={25}
            />
          </div>
          <div>
            <label>Cargo:</label>
            <input
              type="text"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              required
              maxLength={15}
            />
          </div>
          <div>
            <label>Sucursal:</label>
            <input
              type="text"
              value={sucursal}
              onChange={(e) => setSucursal(e.target.value)}
              required
              maxLength={20}
            />
          </div>
          <div>
            <label>Años de antiguedad:</label>
            <input
              type="number"
              value={antiguedadAnios}
              onChange={(e) => setAntiguedadAnios(e.target.value)}
              required
            />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
