import axios from "axios";

const BASE_URL = "http://localhost:8080/auth";

// Envia las credenciales de usuario a la API para autenticarse
const postLogin = async ({ username, password, onLogin }) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      nombreUsuario: username,
      passwordUsuario: password,
    });

    if (response.data && response.data.jwtToken) {
      // Guarda el token en el local storage
      localStorage.setItem("jwtToken", response.data.jwtToken);

      // Llama a la función de autenticación exitosa
      onLogin();
      alert("Autenticación exitosa");
    } else {
      console.error("Error desconocido en la respuesta del servidor");
    }
  } catch (error) {
    if (error.response && error.response.status === 403) {
      // Maneja el caso de credenciales incorrectas
      alert("Autenticación fallida");
    } else {
      // Maneja otros errores
      console.error("Error en la solicitud:", error.message);
    }
  }
};

export { postLogin };