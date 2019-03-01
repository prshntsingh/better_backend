const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const controller = require('../controllers/controller');

//router.get('/:id', product_controller.product_details);
// a simple test url to check that all of our files are communicating correctly.

router.get('/about', function (req, res) {
    res.send('Welocme to xyz');
  });

  //router.post('/user_create', controller.user_create);

  router.post('/post_create/', controller.post_create);

  router.post('/:id/add_comment', controller.add_comment);

  router.get('/show_posts', controller.show_posts);

  router.get('/show_post/:id', controller.show_post);

  router.get('/:id/comment_by_id', controller.get_comment_by_id);

  
  router.get('/:id/comments_by_articleid/', controller.comments_by_articleid);

  //router.put('/:id/add_comment', controller.add_comment);

  //router.get('/:id', controller.user_details);

module.exports = router;