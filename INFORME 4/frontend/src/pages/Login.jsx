import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Importar los estilos

const Login = () => {
  const [registro_academico, setRegistro] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { registro_academico, password });
      localStorage.setItem("token", res.data.token);
      alert("Inicio de sesión exitoso");
      navigate("/publicaciones");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.response.data.error);
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Registro Académico"
            className="input-field"
            value={registro_academico}
            onChange={(e) => setRegistro(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="button-primary">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
// Compare this snippet from INFORME%204/frontend/src/pages/Login.jsx: