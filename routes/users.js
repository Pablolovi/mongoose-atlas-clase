const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Crear un usuario
router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to create a user" });
    }
});

// Leer todos los usuarios
router.get("/users", async (req, res) => {
    try {
        const users = await User.find(); // Obtener todos los usuarios
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to retrieve users" });
    }
});

// Leer un usuario por ID
router.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to retrieve the user" });
    }
});

// Actualizar un usuario
router.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to update the user" });
    }
});

// Eliminar un usuario
router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "There was a problem trying to delete the user" });
    }
});

module.exports = router;
