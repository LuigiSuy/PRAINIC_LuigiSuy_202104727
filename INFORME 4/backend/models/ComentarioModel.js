import pool from "../db.js";

// Crear un comentario
export const crearComentario = async (comentario) => {
  const { id_publicacion, registro_academico, comentario_texto } = comentario;

  const query = `
    INSERT INTO Comentarios (id_publicacion, registro_academico, comentario)
    VALUES (?, ?, ?)
  `;

  const [result] = await pool.query(query, [id_publicacion, registro_academico, comentario_texto]);
  return result;
};

// Obtener comentarios por publicación
export const obtenerComentariosPorPublicacion = async (id_publicacion) => {
  const [rows] = await pool.query("SELECT * FROM Comentarios WHERE id_publicacion = ? ORDER BY fecha_comentario ASC", [id_publicacion]);
  return rows;
};
