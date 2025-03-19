import pool from "../db.js";

// Obtener todos los cursos
export const obtenerCursos = async () => {
  const [rows] = await pool.query("SELECT * FROM Cursos");
  return rows;
};

// Obtener un curso por código
export const obtenerCursoPorCodigo = async (codigo_curso) => {
  const [rows] = await pool.query("SELECT * FROM Cursos WHERE codigo_curso = ?", [codigo_curso]);
  return rows[0];
};
