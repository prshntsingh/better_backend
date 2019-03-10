const mongoose = require('mongoose');

const dbSchema = new mongoose.Schema({
    "Channel name": String,
    
    "Grade": String,

    "Rank": Number,

    "Video Uploads": Number,

    "Subscribers": Number,

    "Video views": Number
});

module.exports = mongoose.model("Channels", dbSchema);
