const Channels = require('../models/channels');

exports.show_channels = function (req , res) {
    Channels.find({}).limit(200).then(function (posts) {
    res.send(posts);
    });
   };


exports.search = function (req , res) {

    var searchitem=req.body.searchitem;
   // var keywords=searchitem.split(" ");
    console.log(searchitem);
    Channels.find({'Channel name': searchitem }, function (err, post) {
        if(err)
        {
            console.log(err);
        }
        else
        {
        res.send(post);
        }
    });

};

exports.show_channel = function (req, res) {
    Channels.find({_id:req.params.id}, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
};