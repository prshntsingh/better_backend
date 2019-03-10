const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller');



router.get('/about', function (req, res) {
    res.send('Welocme to xyz');
  });

  router.post('/search/',controller.search);

  // router.post('/post_create/',upload, controller.post_create);

  // router.post('/:id/add_comment', controller.add_comment);

  router.get('/show_channels', controller.show_channels);

  router.get('/show_channel/:id', controller.show_channel);

  // router.get('/:cid/show_posts_by_company', controller.show_posts_by_company);

  // router.get('/:id/comment_by_id', controller.get_comment_by_id);

  // router.get('/:id/comments_by_articleid/', controller.comments_by_articleid);

   //router.get('/show_log', controller.show_log);

  //  router.get('/:aid/upvotepost', controller.upvotepost);

  //router.put('/:id/add_comment', controller.add_comment);

  //router.get('/:id', controller.user_details);

//////////////admin
  // router.get('/:cid/show_users_to_admin/',controller.show_users_to_admin);

  // router.get('/:cid/:aid/deletepost_admin/',controller.deletepost_admin);

  // router.get('/:cid/:eid/deleteuser_admin/',controller.deleteuser_admin);

  // router.get('/:cid/:aid/acceptpost_admin/',controller.acceptpost_admin);

  // router.get('/:cid/:aid/rejectpost_admin/',controller.rejectpost_admin);

  // router.get('/:cid/show_posts_tobereveiwed_admin',controller.show_posts_tobereveiwed_admin);





module.exports = router;
