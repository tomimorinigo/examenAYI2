import "../../assets/styles/Table.css";

function ProductTable({productos, openModal, handleDelete}){
    // Tabla que muestra los productos
    return(
        <table className="table">
          <thead>
            <tr>
              <th>PLU</th>
              <th>Codigo EAN</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Tipo</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Stock</th>
              <th id="last-th">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.idProducto}>
                <td>{producto.idProducto}</td>
                <td>{producto.codigoEan}</td>
                <td>{producto.nombreProducto}</td>
                <td>{producto.descripcionProducto}</td>
                <td>{producto.tipo}</td>
                <td>{producto.marca}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
                <td id="last-td">
                    <button className="button" onClick={() => openModal(producto)}>
                      <i className="fa-solid fa-pen"></i>
                    </button>
                    <button className="button" id="delete" onClick={() => handleDelete(producto.idProducto)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    )
}

export default ProductTable;