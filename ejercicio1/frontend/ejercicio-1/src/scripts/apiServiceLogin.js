import axios from "axios";

const BASE_URL = "http://localhost:8080/auth";

const postLogin = async ({ username, password, onLogin }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      nombreUsuario: username,
      passwordUsuario: password,
    });


    console.log(response.data);

    if (response.data && response.data.jwtToken) {

      // Guarda el token en el local storage
      localStorage.setItem("jwtToken", response.data.jwtToken);

      onLogin();
      alert("Autenticación exitosa");
      
    } else {
      console.error("Error desconocido en la respuesta del servidor");
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Maneja el caso de credenciales incorrectas
      alert("Autenticación fallida");
      console.error("Autenticación fallida");
    } else {
      // Maneja otros errores
      console.error("Error en la solicitud:", error.message);
    }
  }
};

export { postLogin };