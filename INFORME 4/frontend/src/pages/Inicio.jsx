import { Link } from "react-router-dom";
import "../styles.css"; // Importar estilos

const Inicio = () => {
  return (
    <div className="container">
      <h1>Bienvenido a Calificación de Catedráticos</h1>
      <p>Consulta opiniones y comparte tu experiencia con cursos y catedráticos.</p>
      <div>
        <Link to="/login" className="button">Iniciar Sesión</Link>
        <Link to="/registro" className="button">Registrarse</Link>
      </div>
    </div>
  );
};

export default Inicio;
