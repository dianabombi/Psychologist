const express = require("express");
const router = express.Router();

const {
    getUserById, 
    createUser, 
    updateUser,
    deleteUser
} = require ("../controllers/user.controller");

router.get("/:id", getUserById);
router.post("/create", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;


