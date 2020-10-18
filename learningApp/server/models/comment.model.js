const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const commentSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId
  },
  postId:{
    type: String,
    required: true
  },
  content: {
    type: String
  },
  user: {
    type: String,
    required: true
  },
  timestamp:{
    type: String
  },
  likes:{
    type: Number
  }
});

commentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Comment', commentSchema);
