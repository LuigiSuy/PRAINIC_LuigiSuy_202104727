import express from "express";
import { crearPublicacion, obtenerPublicaciones, obtenerPublicacionesPorTipo } from "../models/PublicacionModel.js";

const router = express.Router();

// Obtener todas las publicaciones
router.get("/", async (req, res) => {
  try {
    const publicaciones = await obtenerPublicaciones();
    res.json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener publicaciones filtradas por tipo (Curso o Catedrático)
router.get("/tipo/:tipo", async (req, res) => {
  try {
    const publicaciones = await obtenerPublicacionesPorTipo(req.params.tipo);
    res.json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear una publicación
router.post("/", async (req, res) => {
  try {
    const result = await crearPublicacion(req.body);
    res.json({ mensaje: "Publicación creada correctamente", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
