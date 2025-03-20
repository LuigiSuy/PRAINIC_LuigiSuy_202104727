import pool from "../db.js";

// Crear una nueva publicación
export const crearPublicacion = async (publicacion) => {
    const { id_curso, id_catedratico, registro_academico, contenido, tipo } = publicacion;
  
    let query = "";
    let values = [];
  
    if (tipo === "Curso") {
      query = `
        INSERT INTO Publicaciones (id_curso, registro_academico, contenido, tipo)
        VALUES (?, ?, ?, ?)
      `;
      values = [id_curso, registro_academico, contenido, tipo];
    } else if (tipo === "Catedratico") {
      query = `
        INSERT INTO Publicaciones (id_catedratico, registro_academico, contenido, tipo)
        VALUES (?, ?, ?, ?)
      `;
      values = [id_catedratico, registro_academico, contenido, tipo];
    } else {
      throw new Error("Tipo de publicación no válido.");
    }
  
    const [result] = await pool.query(query, values);
    return result;
  };

// Obtener todas las publicaciones
export const obtenerPublicaciones = async () => {
    const [rows] = await pool.query("SELECT * FROM Publicaciones ORDER BY fecha_publicacion DESC");
    return rows;
  };
  

// Obtener publicaciones por curso o catedrático
export const obtenerPublicacionesPorTipo = async (tipo) => {
  const [rows] = await pool.query("SELECT * FROM Publicaciones WHERE tipo = ? ORDER BY fecha_publicacion DESC", [tipo]);
  return rows;
};
