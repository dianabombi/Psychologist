const express = require("express");
const router = express.Router();
const axios = require("axios");

const {
    register,
    login,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");

// User routes
router.post("/:id", register);
router.post("/login", login);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
