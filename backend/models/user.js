const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    password: {type: String, required: true},
    password2: {type: String, required: true}, // confirmation of password - has to bee same as previous field
  });

const User = mongoose.model('User', userSchema); // model always starts with capital letter and singular
 
module.exports = User;

