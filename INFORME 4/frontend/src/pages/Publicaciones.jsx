import { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css"; // Importar estilos

const Publicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [comentarios, setComentarios] = useState({});
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevaPublicacion, setNuevaPublicacion] = useState({
    id_curso: "",
    id_catedratico: "",
    registro_academico: "",
    contenido: "",
    tipo: "Curso",
  });

  // Obtener publicaciones
  const obtenerPublicaciones = async () => {
    try {
      const res = await axios.get("http://localhost:5000/publicaciones");
      setPublicaciones(res.data);
    } catch (error) {
      console.error("Error al obtener publicaciones:", error);
    }
  };

  useEffect(() => {
    obtenerPublicaciones();
  }, []);

  // Obtener comentarios de una publicación
  const obtenerComentarios = async (id_publicacion) => {
    try {
      const res = await axios.get(`http://localhost:5000/comentarios/${id_publicacion}`);
      setComentarios((prev) => ({ ...prev, [id_publicacion]: res.data }));
    } catch (error) {
      console.error("Error al obtener comentarios:", error);
    }
  };

  // Manejar cambios en los inputs de nueva publicación
  const handleChange = (e) => {
    setNuevaPublicacion({ ...nuevaPublicacion, [e.target.name]: e.target.value });
  };

  // Enviar nueva publicación
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/publicaciones", nuevaPublicacion);
      alert("Publicación agregada exitosamente!");

      // Actualizar lista de publicaciones
      obtenerPublicaciones();

      // Limpiar el formulario
      setNuevaPublicacion({
        id_curso: "",
        id_catedratico: "",
        registro_academico: "",
        contenido: "",
        tipo: "Curso",
      });
    } catch (error) {
      alert("Error al agregar publicación: " + error.response.data.error);
    }
  };

  // Enviar un nuevo comentario
  const handleComentar = async (id_publicacion) => {
    if (!nuevoComentario.trim()) return alert("El comentario no puede estar vacío.");

    try {
      await axios.post("http://localhost:5000/comentarios", {
        id_publicacion,
        registro_academico: "202012345", // ⚠️ Aquí puedes obtenerlo del usuario autenticado
        comentario_texto: nuevoComentario,
      });

      alert("Comentario agregado!");
      setNuevoComentario("");
      obtenerComentarios(id_publicacion);
    } catch (error) {
      alert("Error al comentar: " + error.response.data.error);
    }
  };

  return (
    <div className="container">
      <div className="publicaciones-container">
        <h2>Publicaciones</h2>

        {/* Formulario para agregar publicación */}
        <form onSubmit={handleSubmit} className="publicacion-form">
          <select name="tipo" value={nuevaPublicacion.tipo} onChange={handleChange} className="input-field">
            <option value="Curso">Curso</option>
            <option value="Catedratico">Catedrático</option>
          </select>

          {nuevaPublicacion.tipo === "Curso" ? (
            <input type="text" name="id_curso" placeholder="Código del Curso" value={nuevaPublicacion.id_curso} onChange={handleChange} className="input-field" required />
          ) : (
            <input type="text" name="id_catedratico" placeholder="Código del Catedrático" value={nuevaPublicacion.id_catedratico} onChange={handleChange} className="input-field" required />
          )}

          <input type="text" name="registro_academico" placeholder="Registro Académico" value={nuevaPublicacion.registro_academico} onChange={handleChange} className="input-field" required />

          <textarea name="contenido" placeholder="Escribe tu publicación..." value={nuevaPublicacion.contenido} onChange={handleChange} className="input-field" required></textarea>

          <button type="submit" className="button-secondary">Agregar Publicación</button>
        </form>

        {/* Mostrar publicaciones */}
        {publicaciones.length === 0 ? (
          <p>No hay publicaciones aún.</p>
        ) : (
          publicaciones.map((pub, index) => (
            <div key={index} className="publicacion">
              <h3>{pub.tipo}: {pub.id_curso || pub.id_catedratico}</h3>
              <p>{pub.contenido}</p>
              <p className="fecha">Publicado el: {new Date(pub.fecha_publicacion).toLocaleString()}</p>

              {/* Botón para ver comentarios */}
              <button className="button-secondary" onClick={() => obtenerComentarios(pub.id_publicacion)}>
                Ver Comentarios
              </button>

              {/* Mostrar comentarios si existen */}
              {comentarios[pub.id_publicacion] && comentarios[pub.id_publicacion].length > 0 ? (
                <div className="comentarios-container">
                  {comentarios[pub.id_publicacion].map((com, idx) => (
                    <p key={idx} className="comentario">{com.comentario}</p>
                  ))}
                </div>
              ) : (
                <p>No hay comentarios aún.</p>
              )}

              {/* Agregar comentario */}
              <div className="comentario-form">
                <input
                  type="text"
                  placeholder="Escribe un comentario..."
                  value={nuevoComentario}
                  onChange={(e) => setNuevoComentario(e.target.value)}
                  className="input-field"
                />
                <button className="button-secondary" onClick={() => handleComentar(pub.id_publicacion)}>
                  Comentar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Publicaciones;
