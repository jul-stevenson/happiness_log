var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
      title: "Julie\'s Happiness Log", 
  });
});

module.exports = router;

router.post('/', function(req, res) {
  if(!req.body.text) {
    return res.redirect('/');
  }

  var post = new Post({
    type: req.body.type,
    text: req.body.text,
    date: (new Date())
  });

  post.save(function(err) {
    res.redirect('/');
  });
});

router.get('/thoughts', function(req, res, next) {
  Post.find({ 'type': 'Thought' }).sort({ date: -1 }).exec(function(err, posts) {  
    res.render('posts', { 
      title: "Julie\'s Happiness Log", 
      posts: posts 
    });
  });
});

router.get('/experience', function(req, res, next) {
  Post.find({ 'type': 'Experience'}).sort({ date: -1 }).exec(function(err, posts) {  
    res.render('posts', { 
      title: "Julie\'s Happiness Log", 
      posts: posts 
    });
  });
});

router.get('/people', function(req, res, next) {
  Post.find({ 'type': 'People'}).sort({ date: -1 }).exec(function(err, posts) {  
    res.render('posts', { 
      title: "Julie\'s Happiness Log", 
      posts: posts 
    });
  });
});

