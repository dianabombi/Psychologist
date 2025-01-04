const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true, lowerCase: true, unique: true},
    phone: {type: String, required: true},
    password: {type: String, required: true}
    // role: {type: String, enum: ["User", "Admin"], default: "User"}   
});

const User = mongoose.model('User', userSchema); // model always starts with capital letter and singular
 
module.exports = User;

