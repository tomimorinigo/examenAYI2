import "../assets/styles/EmployeeTable.css";

function EmployeeTable({ empleados, openModal, handleDelete }) {
  // Tabla que muestra los empleados y sus datos
  return (
    <table>
      <thead>
        <tr>
          <th>Legajo</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cargo</th>
          <th>Sucursal</th>
          <th>Antiguedad</th>
          <th id="last-th">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map((empleado) => (
          <tr key={empleado.legajo}>
            <td>{empleado.legajo}</td>
            <td>{empleado.nombreEmpleado}</td>
            <td>{empleado.apellidoEmpleado}</td>
            <td>{empleado.cargo}</td>
            <td>{empleado.sucursal}</td>
            <td>{empleado.antiguedadAnios}</td>
            <td id="last-td">
              <button className="button" onClick={() => openModal(empleado)}>
                <i className="fa-solid fa-pen"></i>
              </button>
              <button
                className="button"
                id="delete"
                onClick={() => handleDelete(empleado.legajo)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
