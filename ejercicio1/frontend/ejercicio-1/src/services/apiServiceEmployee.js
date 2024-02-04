import axios from "axios";
import { getToken, handleApiError } from "../scripts/handlingAuth";

const baseURLAPI = "http://localhost:8080/api/empleados";

// Obtiene la lista de empleados desde la API
const getEmpleados = async ({ setEmpleados }) => {
  try {
    const response = await axios.get(`${baseURLAPI}/all`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    setEmpleados(response.data);
  } catch (error) {
    handleApiError(error);
  }
};

// Envia un nuevo empleado a la API
const postNewEmpleado = async (data, { setEmpleados }) => {
  const nuevoLegajo = parseInt(data.legajo);
  const legajoEnUso = await verificarLegajo(nuevoLegajo);

  if (legajoEnUso) {
    alert("ERROR: El legajo ingresado ya se encuentra en uso!");
    return;
  } else {
    console.log(data);
    try {
      const response = await axios.post(`${baseURLAPI}/save`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      console.log(response);
      getEmpleados({ setEmpleados });
    } catch (error) {
      handleApiError(error);
    }
  }
};

// Verifica si un legajo ya se encuentra en uso
const verificarLegajo = async (legajo) => {
  try {
    const response = await axios.get(`${baseURLAPI}/legajo-exists/${legajo}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// Actualiza un empleado en la API
const updateEmpleado = async (data, { setEmpleados }) => {
  try {
    const response = await axios.put(`${baseURLAPI}/update`, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    console.log(response);
    getEmpleados({ setEmpleados });
  } catch (error) {
    handleApiError(error);
  }
};

// Elimina un empleado de la API
const deleteEmpleado = async (legajo, { setEmpleados }) => {
  try {
    const response = await axios.delete(`${baseURLAPI}/delete/${legajo}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    console.log(response);
    getEmpleados({ setEmpleados });
  } catch (error) {
    handleApiError(error);
  }
};

export { getEmpleados, postNewEmpleado, updateEmpleado, deleteEmpleado };
