const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    date: { type: Date},
    time: {type: String},
    name: {type: String},
    email: {type: String},
  });

const Booking = mongoose.model('Booking', bookingSchema); // model always starts with capital letter and singular
 
module.exports = Booking;