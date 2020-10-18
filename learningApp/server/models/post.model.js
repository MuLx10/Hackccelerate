const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const postSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
  },
  timestamp:{
    type: String
  },
  likes:{
    type: Number
  }
});

postSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Post', postSchema);
