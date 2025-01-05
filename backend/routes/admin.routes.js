// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const { 
    confirmBooking, 
    createTimeSlot 
} = require("../controllers/admin.controller");

// Protect all admin routes
router.use(authMiddleware);

router.put("/:id", confirmBooking);
router.post("/timeSlot", createTimeSlot);

module.exports = router;

