import pool from "../db.js";

// Obtener todos los catedráticos
export const obtenerCatedraticos = async () => {
  const [rows] = await pool.query("SELECT * FROM Catedraticos");
  return rows;
};

// Obtener un catedrático por código
export const obtenerCatedraticoPorCodigo = async (codigo_catedratico) => {
  const [rows] = await pool.query("SELECT * FROM Catedraticos WHERE codigo_catedratico = ?", [codigo_catedratico]);
  return rows[0];
};
