import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Registro Académico" value={registro_academico} onChange={(e) => setRegistro(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
