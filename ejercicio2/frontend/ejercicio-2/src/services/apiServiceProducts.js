import axios from "axios";
import { getToken, handleApiError } from "../scripts/handlingAuth";

const BASE_URL = "http://localhost:8080/api/productos";

const getAllProductos = async ({ setProductos }) => {
  try {
    const response = await axios.get(`${BASE_URL}/all`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });

    setProductos(response.data);

  } catch (error) {
    handleApiError(error);
  }
};

const postNewProducto = async (data, { setProductos }) => {
  try {
    const response = await axios.post(
        `${BASE_URL}/save`,
      data, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );
    
    console.log(response);
    getAllProductos({ setProductos });

  } catch (error) {
    handleApiError(error);
  }
};

const updateProducto = async (data, { setProductos }) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/update`,
      data, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    console.log(response);
    getAllProductos({ setProductos });

  } catch (error) {
    handleApiError(error);
  }
};

const deleteProducto = async (idProducto, { setProductos }) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/delete/${idProducto}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    console.log(response);
    getAllProductos({ setProductos });

  } catch (error) {
    handleApiError(error);
  }
};

export { getAllProductos, postNewProducto, updateProducto, deleteProducto };