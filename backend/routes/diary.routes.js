const express = require("express");
const router = express.Router();

const {
    getAllNotes,
    getNotesById,
    createNote,
    updateNotes,
    deleteNotes
} = require ("../controllers/diary.controller");

router.get("/", getAllNotes);
router.get("/:id", getNotesById);
router.put("/:id", updateNotes);
router.post("/create", createNote);
router.delete("/:id", deleteNotes);

module.exports = router;