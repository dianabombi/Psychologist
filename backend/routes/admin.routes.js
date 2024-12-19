const express = require("express");
const router = express.Router();

const {
    confirmBooking,
    createTimeSlot
} = require ("../controllers/admin.controller");

router.put("/:id", confirmBooking);
router.post("/timeSlot", createTimeSlot);

module.exports = router;