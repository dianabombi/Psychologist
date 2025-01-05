const express = require("express");
const router = express.Router();
const axios = require("axios");
const verifyToken = require("../middleware/auth")

const {
    register,
    login,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");

// User routes
router.post("/register", register);
router.post("/login", login);

router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
