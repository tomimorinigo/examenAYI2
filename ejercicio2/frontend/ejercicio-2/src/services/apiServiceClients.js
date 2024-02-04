import axios from "axios";
import { getToken, handleApiError } from "../scripts/handlingAuth";

const BASE_URL = "http://localhost:8080/api/clientes";

const getAllClientes = async ({ setClientes }) => {
  try {
    const response = await axios.get(`${BASE_URL}/all`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });

    setClientes(response.data);
    
  } catch (error) {
    handleApiError(error);
  }
};

const postNewCliente = async (data, { setClientes }) => {
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
    getAllClientes({ setClientes });

  } catch (error) {
    handleApiError(error);
  }
};

const updateCliente = async (data, { setClientes }) => {
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
    getAllClientes({ setClientes });

  } catch (error) {
    handleApiError(error);
  }
};

const deleteCliente = async (idCliente, { setClientes }) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/delete/${idCliente}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      }
    );

    console.log(response);
    getAllClientes({ setClientes });

  } catch (error) {
    handleApiError(error);
  }
};

export { getAllClientes, postNewCliente, updateCliente, deleteCliente };