import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Importar los estilos

const Registro = () => {
  const [usuario, setUsuario] = useState({
    registro_academico: "",
    nombres: "",
    apellidos: "",
    correo: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", usuario);
      alert("Registro exitoso");
      navigate("/login");
    } catch (error) {
      alert("Error en el registro: " + error.response.data.error);
    }
  };

  return (
    <div className="container">
      <div className="register-container">
        <h2 className="register-title">Registro</h2>
        <form onSubmit={handleRegister}>
          <input type="text" name="registro_academico" placeholder="Registro Académico" className="input-field" onChange={handleChange} required />
          <input type="text" name="nombres" placeholder="Nombres" className="input-field" onChange={handleChange} required />
          <input type="text" name="apellidos" placeholder="Apellidos" className="input-field" onChange={handleChange} required />
          <input type="email" name="correo" placeholder="Correo Electrónico" className="input-field" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Contraseña" className="input-field" onChange={handleChange} required />
          <button type="submit" className="button-primary">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
