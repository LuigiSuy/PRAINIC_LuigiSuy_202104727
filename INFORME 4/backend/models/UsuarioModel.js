import pool from "../db.js";
import bcrypt from "bcryptjs";

// Registrar usuario
export const registrarUsuario = async (usuario) => {
  const { registro_academico, nombres, apellidos, correo, password } = usuario;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const query = `
    INSERT INTO Usuarios (registro_academico, nombre, apellido, correo, contrasenia)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await pool.query(query, [registro_academico, nombres, apellidos, correo, hashedPassword]);
  return result;
};

// Obtener usuario por correo
export const obtenerUsuarioPorCorreo = async (correo) => {
  const query = "SELECT * FROM Usuarios WHERE correo = ?";
  const [rows] = await pool.query(query, [correo]);
  return rows[0]; 
};

// Obtener usuario por registro académico
export const obtenerUsuarioPorRegistro = async (registro_academico) => {
  const query = "SELECT * FROM Usuarios WHERE registro_academico = ?";
  const [rows] = await pool.query(query, [registro_academico]);
  return rows[0]; 
};
