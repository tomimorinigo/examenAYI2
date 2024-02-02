import { useEffect, useState } from "react";
import "../../assets/styles/Component.css";
import ProductModal from "./ProductModal";
import ProductTable from "./ProductTable";
import { getAllProductos, postNewProducto, updateProducto, deleteProducto } from "../../scripts/apiServiceProducts";

function ProductComponent({ title }) {
  const [productos, setProductos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProducto, setSelectedProducto] = useState(null);

  // Efecto para cargar los productos al montar el componente
  useEffect(() => {
    getAllProductos({setProductos});
  }, []);

  // Funciones para abrir, cerrar y guardar el modal
  const openModal = (producto) => {
    setSelectedProducto(producto);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleModalSave = (data) => {
    if (selectedProducto) {
      data.idProducto = selectedProducto.idProducto;
      updateProducto(data, {setProductos});
    } else {
      postNewProducto(data, {setProductos});
    }
    closeModal();
  };

  // Función para eliminar un producto
  const handleDelete = (idProducto) => {
    const confirmed = window.confirm("¿Está seguro que desea eliminar el producto?");
    if (!confirmed) return;
    
    console.log("Producto a eliminar: ", idProducto);
    deleteProducto(idProducto, {setProductos});
  };

  return (
    <div className="container">
      <h1>{title}</h1>

      {productos.length === 0 ? (
        <h2 id="error-h2">No se han encontrado productos!</h2>
      ) : (
        <ProductTable
          productos={productos}
          openModal={openModal}
          handleDelete={handleDelete}
        />
      )}

      <button
        className="new-button"
        onClick={() => {
          setSelectedProducto(null);
          setModalOpen(true);
        }}
      >
        Nuevo producto
      </button>
        
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleModalSave}
        selectedProducto={selectedProducto}
      />

    </div>
  );
}

export default ProductComponent;
