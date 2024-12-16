const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {type: String},
    category: {type: String},
    date: { type: Date, default: Date.now },
    content: {type: String},
  });

const Blog = mongoose.model('Blog', blogSchema); // model always starts with capital letter and singular
 
module.exports = Blog;