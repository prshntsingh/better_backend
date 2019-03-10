const Channels = require('../models/channels');

exports.show_channels = function (req , res) {
    Channels.find({}).limit(200).then(function (posts) {
    res.send(posts);
    });
   };

// exports.show_posts_by_company = function (req , res) {
//        Post.find({companyid:req.params.cid,flag:true}).then(function (posts) {
//        res.send(posts);
//        });
//       };

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

// exports.show_post = function (req, res) {
//     Post.find({_id:req.params.id,flag:true}, function (err, post) {
//         if (err) return next(err);
//         res.send(post);
//     })
// };

// exports.get_comment_by_id = function (req, res) {
//     Post.findById(req.params.id, function (err, post) {
//         if (err) return next(err);
//         res.send(post);
//     });
// };

// exports.comments_by_articleid = function(req, res, next) {
//     Comment.find({articleid: req.params.id }, function (err, post) {
//         if (err) return next(err);
//         console.log(post);
//         res.send(post);
//     });
// };

// exports.show_log = function (req , res) {
//     Channels.find({}).then(function (logs) {
//         res.send(logs);
//     });

// };

// exports.show_users_to_admin = function (req , res) {
//     var x=req.params.cid;
//     var company_name;
//     switch(x){
//         case '1':{company_name="BDL"; break;}
//         case '2':{company_name="HAL"; break;}
//         case '3':{company_name="BHEL"; break;}
//         case '4':{company_name="GS"; break;}
//         default:res.send("admin not identified");
//     }

//     User.find({companyname:company_name},function (err,users) {
//        res.send(users);
//     });
// };

// exports.deletepost_admin = function (req , res) {
//     var x=req.params.cid;
//     var aid=req.params.aid;
//     Post.deleteOne({_id:aid,companyid:x},function (err,post) {
//         res.send(aid+" deleted ");
//     });
// };

// exports.deleteuser_admin = function (req , res) {
//     var x=req.params.cid;
//     var eid=req.params.eid;
//     var company_name;
//     switch(x){
//         case '1':{company_name="BDL"; break;}
//         case '2':{company_name="HAL"; break;}
//         case '3':{company_name="BHEL"; break;}
//         case '4':{company_name="GS"; break;}
//         default:res.send("admin not identified");
//     }

//     User.deleteOne({eid:eid,companyname:company_name},function (err,post) {
//         res.send(eid+" deleted ");
//     });
// };

// exports.acceptpost_admin = function (req , res) {
//     var x=req.params.cid;
//     var aid=req.params.aid;

//     Post.updateOne({_id:aid,companyid:x},{$set:{flag:true}},function (err,post) {
//         res.send(aid+" approved by admin ");
//     });
// };

// exports.rejectpost_admin = function (req , res) {
//     var x=req.params.cid;
//     var aid=req.params.aid;
//     Post.deleteOne({_id:aid,companyid:x,flag:false},function (err,post) {
//         {res.send(aid+" was not approved ");}
//     });
// };

// exports.show_posts_tobereveiwed_admin = function (req , res) {
//     var x=req.params.cid;
//     Post.find({flag:false,companyid:x}).then(function (posts) {
//         res.send(posts);
//     });
// };





// // exports.comments_by_articleid = function (req , res) {
// //     Comment.find({articleid: req.params.id}).then(function (comments) {
// //         console.log(comments);
// //     res.send(comments);
// //     });
// //    };



// // exports.get_comment_by_id = function (req , res) {
// //     Post.find({}).then(function (posts) {
// //     res.send(posts);
// //     });
// //    };


// // exports.product_details = function (req, res) {
// //     Product.findById(req.params.id, function (err, product) {
// //         if (err) return next(err);
// //         res.send(product);
// //     })
// // };


// // exports.product_details = function (req, res) {
// //     Product.findById(req.params.id, function (err, product) {
// //         if (err) return next(err);
// //         res.send(product);
// //     })
// // };



// // exports.add_comment = function (req, res) {
// //       var comment_obj = { text: req.body.text};
// //     Post.findOneAndUpdate(
// //    { _id: req.params.id }, {new: true, useFindAndModify: false},
// //    { $push: { comments: comment_obj } },
// //   function (error, success) {
// //         if (error) {
// //             console.log(error);
// //         } else {
// //             console.log(success);
// //         }
// //     });
// // };


// // exports.user_details = function (req, res) {
// //     User.findById(req.params.id, function (err, user) {
// //         if (err) return next(err);
// //         res.json(user);
// //     })
// // };
