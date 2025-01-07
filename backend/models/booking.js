const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true }, 
    time: { type: String, required: true },
    duration: { type: Number, required: true }, 
  });

const Booking = mongoose.model('Booking', bookingSchema); // model always starts with capital letter and singular
 
module.exports = Booking;