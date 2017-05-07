var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  type: { type: String, required: true },
  date: { type: Date, required: true },
  text: { type: String, required: true }
});

var post = mongoose.model('post', postSchema);

module.exports = post;
