const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "User id is Required"]
  },
  title: {
    type: String,
    required: [true, "Title is Required"],
    minLength: [8, "It should be at least 8 characters"] 
  },
  links: [
    {
      platform: {
        type: String,
        required: [true, "Platform name is required"],
        enum: ['Instagram', 'LinkedIn', 'Github', 'Twitter', 'Snapchat', 'Custom'] 
      },
      url: {
        type: String,
        required: [true, "URL is required"]
      }
    }
  ]
});

const Link = mongoose.model('Link', linkSchema);
module.exports = Link;