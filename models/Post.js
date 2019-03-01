const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    username: String,
    upvote: {type:Number, default: 0 }
});

module.exports = mongoose.model("Post", PostSchema);