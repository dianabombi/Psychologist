const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    date: { type: Date},
    time: {type: String},
    userInfo: {type: mongoose.Schema.Types.ObjectId, ref: "User"} // from User Schema
  });

const Booking = mongoose.model('Booking', bookingSchema); // model always starts with capital letter and singular
 
module.exports = Booking;