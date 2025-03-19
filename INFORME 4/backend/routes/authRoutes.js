import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { registrarUsuario, obtenerUsuarioPorRegistro } from "../models/UsuarioModel.js"; // Importar funciones de modelo

const router = express.Router();

// Registro de usuario
router.post("/register", async (req, res) => {
    try {
        const result = await registrarUsuario(req.body);
        res.json({ mensaje: "Usuario registrado correctamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Inicio de sesión con registro académico
router.post("/login", async (req, res) => {
    const { registro_academico, password } = req.body;

    try {
        const usuario = await obtenerUsuarioPorRegistro(registro_academico);
        if (!usuario) {
            return res.status(401).json({ error: "Usuario no encontrado" });
        }

        console.log("Contraseña ingresada:", password);
        console.log("Contraseña en BD:", usuario.contrasenia);

        const esValido = await bcrypt.compare(password, usuario.contrasenia);
        if (!esValido) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        const token = jwt.sign({ registro_academico: usuario.registro_academico }, "secreto", { expiresIn: "1h" });

        res.json({ mensaje: "Inicio de sesión exitoso", token });
    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).json({ error: error.message });
    }
});


// Obtener usuario por registro académico
router.get("/usuario/:registro", async (req, res) => {
    try {
        const usuario = await obtenerUsuarioPorRegistro(req.params.registro);
        if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
