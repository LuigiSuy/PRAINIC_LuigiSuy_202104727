import { useState, useEffect } from "react";
import axios from "axios";

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const obtenerPublicaciones = async () => {
      const res = await axios.get("http://localhost:5000/publicaciones");
      setPublicaciones(res.data);
    };
    obtenerPublicaciones();
  }, []);

  return (
    <div>
      <h2>Publicaciones</h2>
      {publicaciones.length === 0 ? <p>No hay publicaciones aún.</p> : (
        publicaciones.map((pub) => (
          <div key={pub.id_publicacion}>
            <h3>{pub.tipo}: {pub.id_curso || pub.id_catedratico}</h3>
            <p>{pub.contenido}</p>
            <p>Fecha: {new Date(pub.fecha_publicacion).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Publicaciones;
