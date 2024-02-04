// Obtiene el token de autenticación del local storage
const getToken = () => {
  return localStorage.getItem("jwtToken");
};

// Maneja errores de la API y muestra un mensaje de alerta si el error es 403
const handleApiError = (error) => {
  if (error.response && error.response.status === 403) {
    alert(
      "Error 403: Acceso no autorizado. Intenta iniciar sesión nuevamente."
    );
  } else {
    console.error("Error al comunicarse con la API", error);
  }
};

// Actualiza el estado de autenticación
const handleLogin = ({ setIsLogged }) => {
  setIsLogged(true);
};

// Limpia el token en el localStorage y actualiza el estado de autenticación
const handleLogout = ({ setIsLogged }) => {
  localStorage.removeItem("jwtToken");
  setIsLogged(false);
};

// Verifica si existe un token en el localStorage para determinar si el usuario está autenticado
const checkLocalStorage = () => {
  const jwtToken = localStorage.getItem("jwtToken");
  return jwtToken !== null;
};

export { getToken, handleApiError, handleLogin, handleLogout, checkLocalStorage };
