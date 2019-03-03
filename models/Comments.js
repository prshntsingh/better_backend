const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    articleid: String,
    comment: String,
    user: String,
    time:String,
    date:String
});

module.exports = mongoose.model('Comments', CommentSchema);