import axios from "axios";

const baseURLAPI = "http://localhost:8080/api/empleados";

const getToken = () => {
  return localStorage.getItem("jwtToken");
};

const handleApiError = (error) => {
  if (error.response && error.response.status === 403) {
    alert("Error 403: Acceso no autorizado");
  } else {
    console.error("Error al comunicarse con la API", error);
  }
};

const getEmpleados = async ({ setEmpleados }) => {
  try {
    const response = await axios.get(`${baseURLAPI}/all`, 
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    setEmpleados(response.data);
  } catch (error) {
    handleApiError(error);
  }
};

const postNewEmpleado = async (data, { setEmpleados }) => {
  const nuevoLegajo = parseInt(data.legajo);
  const legajoEnUso = await verificarLegajo(nuevoLegajo);

  if (legajoEnUso) {
    alert("ERROR: El legajo ingresado ya se encuentra en uso!");
    return;
  } else {
    console.log(data);
    try {
      const response = await axios.post(`${baseURLAPI}/save`, data, 
      {
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

const verificarLegajo = async (legajo) => {
  try {
    const response = await axios.get(`${baseURLAPI}/legajo-exists/${legajo}`, 
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

const updateEmpleado = async (data, { setEmpleados }) => {
  try {
    const response = await axios.put(`${baseURLAPI}/update`, data, 
    {
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

const deleteEmpleado = async (legajo, { setEmpleados }) => {
  try {
    const response = await axios.delete(
      `${baseURLAPI}/delete/${legajo}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    console.log(response);
    getEmpleados({ setEmpleados });
  } catch (error) {
    handleApiError(error);
  }
};

export { getEmpleados, postNewEmpleado, updateEmpleado, deleteEmpleado };
