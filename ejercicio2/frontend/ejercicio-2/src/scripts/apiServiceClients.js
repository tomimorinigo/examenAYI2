import axios from "axios";

const BASE_URL = "http://localhost:8080/api/clientes";

const getAllClientes = async ({ setClientes }) => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    setClientes(response.data);
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const postNewCliente = async (data, { setClientes }) => {
  try {
    const response = await axios.post(
        `${BASE_URL}/save`,
      data
    );
    console.log(response);
    getAllClientes({ setClientes });
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const updateCliente = async (data, { setClientes }) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/update`,
      data
    );
    console.log(response);
    getAllClientes({ setClientes });
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const deleteCliente = async (idCliente, { setClientes }) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/delete/${idCliente}`
    );
    console.log(response);
    getAllClientes({ setClientes });
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

export { getAllClientes, postNewCliente, updateCliente, deleteCliente };