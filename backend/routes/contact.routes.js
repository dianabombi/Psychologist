const express = require("express");
const router = express.Router();

const {
    createContact,
    updateContact,
    deleteContact
} = require ("../controllers/contact.controller");

router.post("/create", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

module.exports = router;