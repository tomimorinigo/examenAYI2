import { useState } from "react";
import { postLogin } from "../../scripts/apiServiceLogin";
import "../../assets/styles/Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin({ username, password, onLogin });
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesion</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="button-login" type="submit">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}

export default Login;
