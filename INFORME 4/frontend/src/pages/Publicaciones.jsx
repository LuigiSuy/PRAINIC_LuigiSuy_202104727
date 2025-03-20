import { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css"; // Importar estilos

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      try {
        const res = await axios.get("http://localhost:5000/publicaciones");
        setPublicaciones(res.data);
      } catch (error) {
        console.error("Error al obtener publicaciones:", error);
      }
    };
    obtenerPublicaciones();
  }, []);

  return (
    <div className="container">
      <div className="publicaciones-container">
        <h2>Publicaciones</h2>
        {publicaciones.length === 0 ? (
          <p>No hay publicaciones aún.</p>
        ) : (
          publicaciones.map((pub) => (
            <div key={pub.id_publicacion} className="publicacion">
              <h3>{pub.tipo}: {pub.id_curso || pub.id_catedratico}</h3>
              <p>{pub.contenido}</p>
              <p className="fecha">Publicado el: {new Date(pub.fecha_publicacion).toLocaleString()}</p>
            </div>
          ))
        )}
        <button className="button-secondary">Agregar Publicación</button>
      </div>
    </div>
  );
};

export default Publicaciones;
