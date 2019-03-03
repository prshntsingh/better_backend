const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    username: String,
    companyid: {type:Number, default: -1},
    upvote: {type:Number, default: 0 },
    tag:{type:Array},
    flag:{type:Boolean ,default:1},
    uploadfile:String,
    time:String,
    date:String
});

module.exports = mongoose.model("Post", PostSchema);
