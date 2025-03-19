import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      <h1>Bienvenido a Calificación de Catedráticos</h1>
      <Link to="/login">Iniciar Sesión</Link> | <Link to="/registro">Registrarse</Link>
    </div>
  );
};

export default Inicio;
