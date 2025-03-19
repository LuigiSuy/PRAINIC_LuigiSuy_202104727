import express from "express";
import { obtenerCursos, obtenerCursoPorCodigo } from "../models/CursoModel.js";

const router = express.Router();

// Obtener todos los cursos
router.get("/", async (req, res) => {
  try {
    const cursos = await obtenerCursos();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un curso por código
router.get("/:codigo_curso", async (req, res) => {
  try {
    const curso = await obtenerCursoPorCodigo(req.params.codigo_curso);
    if (!curso) return res.status(404).json({ error: "Curso no encontrado" });

    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
