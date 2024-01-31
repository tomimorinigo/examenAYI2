import axios from "axios";

const baseURLAPI = "http://localhost:8080/api";
const baseURLAUTH = "http://localhost:8080/auth";

const getEmpleados = async ({setEmpleados}) => {
  try {
    const response = await axios.get(`${baseURLAPI}/empleados`);
    setEmpleados(response.data);
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const postNewEmpleado = async (data, {setEmpleados}) => {
  const nuevoLegajo = parseInt(data.legajo);
  const legajoEnUso = await verificarLegajo(nuevoLegajo);

  if (legajoEnUso) {
    alert("ERROR: El legajo ingresado ya se encuentra en uso!");
    return;
  } else {
    console.log(data);
    try {
      const response = await axios.post(
        `${baseURLAPI}/new-empleado`,
        data
      );
      console.log(response);
      getEmpleados({setEmpleados});
    } catch (error) {
      console.error("Error al comunicarse con la API", error);
    }
  }
};

const verificarLegajo = async (legajo) => {
  try {
    const response = await axios.get(
        `${baseURLAPI}/legajo-exists/${legajo}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const updateEmpleado = async (data, {setEmpleados}) => {
  try {
    const response = await axios.put(
      `${baseURLAPI}/update-empleado`,
      data
    );
    console.log(response);
    getEmpleados({setEmpleados});
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const deleteEmpleado = async (legajo, {setEmpleados}) => {
  try {
    const response = await axios.delete(
        `${baseURLAPI}/delete-empleado/${legajo}`
    );
    console.log(response);
    getEmpleados({setEmpleados});
  } catch (error) {
    console.error("Error al comunicarse con la API", error);
  }
};

const postLogin = async ({username, password, onLogin}) => {
  try {
      const response = await axios.post(`${baseURLAUTH}/login`, {
          nombreUsuario: username,
          passwordUsuario: password
      });

      if (response.data) { // ver como responde la API, para dar un mensaje de error si no es correcto
          onLogin();
          alert('Autenticación exitosa');
      } else {
          alert('Autenticación fallida');
          console.error('Autenticación fallida');
      }
  } catch (error) {
      alert('Error al comunicarse con la API');
      console.error('Error al comunicarse con la API', error);
  }
}

export { getEmpleados, postNewEmpleado, updateEmpleado, deleteEmpleado, postLogin };