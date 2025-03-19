import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import cursosRoutes from "./routes/cursosRoutes.js";
import catedraticosRoutes from "./routes/catedraticosRoutes.js";
import publicacionesRoutes from "./routes/publicacionesRoutes.js";
import comentariosRoutes from "./routes/comentariosRoutes.js";


dotenv.config(); // Cargar variables de entorno

const app = express();


// Middlewares
app.use(cors());
app.use(express.json()); // Para manejar JSON en las peticiones
app.use("/auth", authRoutes); // Rutas de autenticación
app.use("/cursos", cursosRoutes); // Rutas de cursos
app.use("/catedraticos", catedraticosRoutes); // Rutas de catedráticos
app.use("/publicaciones", publicacionesRoutes); // Rutas de publicaciones
app.use("/comentarios", comentariosRoutes); // Rutas de comentarios

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor corriendo correctamente!");
});

//prueba de conexion a la base de datos
app.get("/test-db", async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT 1+1 AS resultado");
      res.json({ mensaje: "Conexión a MySQL exitosa", resultado: rows[0].resultado });
    } catch (error) {
      console.error("Error conectando a MySQL:", error);
      res.status(500).json({ error: "Error de conexión a la base de datos" });
    }
  });

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



