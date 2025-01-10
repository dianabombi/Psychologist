// This set up, is available only for authorized User, which wants to keep his daily notes. 
// Will be rendered on front end only for specific User

const mongoose = require('mongoose');

const diarySchema = new mongoose.Schema({
    date: { type: String, required: true },
    content: {type: String},
    mood: { type: String, required: true },
  });

const Diary = mongoose.model('Diary', diarySchema); // model always starts with capital letter and singular
 
module.exports = Diary;