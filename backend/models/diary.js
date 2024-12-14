// This set up, is available only for authorized User, which wants to keep his daily notes. 
// Will be rendered on front end only for userID

const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    content: {type: String},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  });

const Diary = mongoose.model('Diary', diarySchema); // model always starts with capital letter and singular
 
module.exports = Diary;