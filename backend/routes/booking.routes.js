const express = require("express");
const router = express.Router();

const {
    getBookings,
    createBooking
} = require ("../controllers/booking.controller");

router.post("/", getBookings);
router.post("/bookings", createBooking);

module.exports = router;