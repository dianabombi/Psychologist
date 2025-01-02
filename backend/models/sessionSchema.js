const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    duration: { type: Number, required: true },
    client: { type: String, required: true },
    notes: { type: String },
});

module.exports = mongoose.model('Session', sessionSchema);