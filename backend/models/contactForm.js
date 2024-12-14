const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true, lowerCase: true, unique: true},
    phone: {
        type: Number,
        validate: {
            validator: function (v) {
                return /^\d+$/.test(v.toString());
            },
            message: '{VALUE} is not a valid phone number!'
        }
    },
  });

const Contact = mongoose.model('Contact', contactSchema); // model always starts with capital letter and singular
 
module.exports = Contact;