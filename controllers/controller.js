const Comment = require('../models/Comments');
const Post = require('../models/Post');

//Simple version, without validation or sanitation
// exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!');
// };

// exports.user_create = function (req, res) {
//     let user = new User(
//         {
//             name: req.body.name,
//             dept: req.body.dept,
//         }
//     );
//     user.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('User Created successfully')
//     })
// };

exports.post_create = function (req, res) {
    let post = new Post(
        {
            title: req.body.title,
            content: req.body.content,
             username: req.body.username,
             upvote: req.body.upvote
        }
    );
    post.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('post Created successfully')
    })
};

exports.add_comment = function (req, res) {
    let comment = new Comment(
        {
            articleid: req.params.id,
            comment: req.body.comment,
            user: req.body.user
        }
    );
    comment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('comment added successfully')
    })
};


exports.show_posts = function (req , res) {
    Post.find({}).then(function (posts) {
    res.send(posts);
    });
   };



exports.show_post = function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
};

exports.get_comment_by_id = function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
};

exports.comments_by_articleid = function(req, res, next) {
    Comment.find({articleid: req.params.id }, function (err, post) {
        if (err) return next(err);
        console.log(post)
        res.send(post);
    })
};


// exports.comments_by_articleid = function (req , res) {
//     Comment.find({articleid: req.params.id}).then(function (comments) {
//         console.log(comments);
//     res.send(comments);
//     });
//    };

    

// exports.get_comment_by_id = function (req , res) {
//     Post.find({}).then(function (posts) {
//     res.send(posts);
//     });
//    };


// exports.product_details = function (req, res) {
//     Product.findById(req.params.id, function (err, product) {
//         if (err) return next(err);
//         res.send(product);
//     })
// };


// exports.product_details = function (req, res) {
//     Product.findById(req.params.id, function (err, product) {
//         if (err) return next(err);
//         res.send(product);
//     })
// };



// exports.add_comment = function (req, res) {
//       var comment_obj = { text: req.body.text};
//     Post.findOneAndUpdate(
//    { _id: req.params.id }, {new: true, useFindAndModify: false},
//    { $push: { comments: comment_obj } },
//   function (error, success) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log(success);
//         }
//     });
// };


// exports.user_details = function (req, res) {
//     User.findById(req.params.id, function (err, user) {
//         if (err) return next(err);
//         res.json(user);
//     })
// };