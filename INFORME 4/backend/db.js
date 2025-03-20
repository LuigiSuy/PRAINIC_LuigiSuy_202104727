import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

//se usa db.js para la conexion a la base de datos, se usa pool para la conexion a la base de datos, se usa dotenv para cargar las variables de entorno, se usa mysql2/promise para la conexion a la base de datos, se exporta pool para poder usarlo en otros archivos
