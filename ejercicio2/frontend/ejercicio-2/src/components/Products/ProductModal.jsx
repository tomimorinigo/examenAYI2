import "../../assets/styles/Modal.css";
import { useState, useEffect } from "react";

function ProductModal({ isOpen, onClose, onSave, selectedProducto }){
  
  // Estados del formulario
  const [idProducto, setIdProducto] = useState("");
  const [codigoEan, setCodigoEan] = useState("");
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcionProducto, setDescripcionProducto] = useState("");
  const [tipo, setTipo] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  // Funciones del formulario
  const resetForm = () => {
    setIdProducto("");
    setCodigoEan("");
    setNombreProducto("");
    setDescripcionProducto("");
    setTipo("");
    setMarca("");
    setPrecio("");
    setStock("");
  };

  const handlePrice = (e) => {
    const regex = /^\d{1,3}(\.\d{1,2})?$/; // 5 caracteres con hasta 2 decimales
    if (regex.test(e.target.value) || e.target.value === "") {
      setPrecio(e.target.value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    onSave({
      idProducto: idProducto,
        codigoEan,
        nombreProducto: nombreProducto,
        descripcionProducto: descripcionProducto,
        tipo,
        marca,
        precio,
        stock,
    });
    resetForm();
    onClose();
  };

  // Efecto para cargar los datos del empleado seleccionado a modificar
  useEffect(() => {
    if (selectedProducto) {
        setIdProducto(selectedProducto.idProducto);
        setCodigoEan(selectedProducto.codigoEan);
        setNombreProducto(selectedProducto.nombreProducto);
        setDescripcionProducto(selectedProducto.descripcionProducto);
        setTipo(selectedProducto.tipo);
        setMarca(selectedProducto.marca);
        setPrecio(selectedProducto.precio.toString());
        setStock(selectedProducto.stock.toString());
    }
  }, [selectedProducto]);

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
        <h2>Datos del Producto</h2>
        <form onSubmit={handleSave}>
          <div>
            <input
              type="text"
              value={idProducto}
              disabled
              placeholder="PLU (Autoincremental)"
            />
          </div>
          <div>
            <input
              type="text"
              value={codigoEan}
              onChange={(e) => setCodigoEan(e.target.value)}
              required
              maxLength={25}
              placeholder="Codigo EAN"
            />
          </div>
          <div>
            <input
              type="text"
              value={nombreProducto}
              onChange={(e) => setNombreProducto(e.target.value)}
              required
              maxLength={25}
              placeholder="Nombre"
            />
          </div>
          <div>
            <input
              type="text"
              value={descripcionProducto}
              onChange={(e) => setDescripcionProducto(e.target.value)}
              required
              maxLength={100}
              placeholder="Descripcion"
            />
          </div>
          <div>
            <input
              type="text"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
              maxLength={15}
              placeholder="Tipo"
            />
          </div>
          <div>
            <input
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              required
              maxLength={20}
              placeholder="Marca"
            />
          </div>
          <div>
            <input
              type="number"
              value={precio}
              onChange={handlePrice}
              required
              placeholder="Precio"
            />
          </div>
          <div>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              placeholder="Stock"
            />
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
