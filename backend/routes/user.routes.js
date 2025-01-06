const express = require("express");
const router = express.Router();
const axios = require("axios");
const verifyToken = require("../middleware/auth")
const { updateUserRole } = require("../controllers/user.controller");

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
router.post("/update-role", verifyToken, updateUserRole);

module.exports = router;
