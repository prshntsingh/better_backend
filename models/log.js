const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    item:{type:Array},
    cid:Number
});

module.exports = mongoose.model("Log", LogSchema);