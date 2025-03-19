import express from "express";
import { obtenerCatedraticos, obtenerCatedraticoPorCodigo } from "../models/CatedraticoModel.js";

const router = express.Router();

// Obtener todos los catedráticos
router.get("/", async (req, res) => {
  try {
    const catedraticos = await obtenerCatedraticos();
    res.json(catedraticos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un catedrático por código
router.get("/:codigo_catedratico", async (req, res) => {
  try {
    const catedratico = await obtenerCatedraticoPorCodigo(req.params.codigo_catedratico);
    if (!catedratico) return res.status(404).json({ error: "Catedrático no encontrado" });

    res.json(catedratico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
