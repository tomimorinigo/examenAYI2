import axios from "axios";

const BASE_URL = "http://localhost:8080/api/productos";

const getAllProductos = async ({ setProductos }) => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    setProductos(response.data);
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const postNewProducto = async (data, { setProductos }) => {
  try {
    const response = await axios.post(
        `${BASE_URL}/save`,
      data
    );
    console.log(response);
    getAllProductos({ setProductos });
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const updateProducto = async (data, { setProductos }) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/update`,
      data
    );
    console.log(response);
    getAllProductos({ setProductos });
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const deleteProducto = async (idProducto, { setProductos }) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/delete/${idProducto}`
    );
    console.log(response);
    getAllProductos({ setProductos });
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

export { getAllProductos, postNewProducto, updateProducto, deleteProducto };