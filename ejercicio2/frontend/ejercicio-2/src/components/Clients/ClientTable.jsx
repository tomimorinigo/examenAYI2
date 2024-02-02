import "../../assets/styles/Table.css";

function ClientTable({clientes, openModal, handleDelete}){

    return(
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de Ingreso</th>
              <th>Domicilio</th>
              <th>Telefono</th>
              <th id="last-th">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.idCliente}>
                <td>{cliente.idCliente}</td>
                <td>{cliente.nombreCliente}</td>
                <td>{cliente.apellidoCliente}</td>
                <td>{cliente.fechaIngreso}</td>
                <td>{cliente.domicilio}</td>
                <td>{cliente.telefono}</td>
                <td id="last-td">
                    <button onClick={() => openModal(cliente)}>Editar</button>
                    <button id="delete" onClick={() => handleDelete(cliente.idCliente)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}

export default ClientTable;