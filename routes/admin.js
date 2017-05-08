var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find(function(err, posts) {  
    res.render('admin', { 
      title: "Julie\'s Happiness Log", 
      posts: posts 
    });
  });
});

module.exports = router;

router.post('/', function(req, res) {
  if(!req.body.text) {
    return res.redirect('/admin');
  }

  var post = new Post({
    type: req.body.type,
    text: req.body.text,
    date: (new Date())
  });

  post.save(function(err) {
    res.redirect('/admin');
  });
});
