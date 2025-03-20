import express from "express";
import { crearComentario, obtenerComentariosPorPublicacion } from "../models/ComentarioModel.js";

const router = express.Router();

// Obtener comentarios de una publicación
router.get("/:id_publicacion", async (req, res) => {
  try {
    const comentarios = await obtenerComentariosPorPublicacion(req.params.id_publicacion);
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Agregar un comentario a una publicación
router.post("/", async (req, res) => {
  try {
    const result = await crearComentario(req.body);
    res.json({ mensaje: "Comentario agregado correctamente", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
