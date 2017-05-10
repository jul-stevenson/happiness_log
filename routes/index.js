var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var fs = require('fs');

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

router.get('/accomplishments', function(req, res, next) {
  Post.find({ 'type': 'Accomplishment' }).sort({ date: -1 }).exec(function(err, posts) {
    res.render('posts', {
      title: "Julie\'s Happiness Log",
      posts: posts
    });
  });
});

router.get('/gratitude', function(req, res, next) {
  Post.find({ 'type': 'Gratitude'}).sort({ date: -1 }).exec(function(err, posts) {
    res.render('posts', {
      title: "Julie\'s Happiness Log",
      posts: posts
    });
  });
});

router.get('/quotes', function(req, res, next) {
  Post.find({ 'type': 'Quote'}).sort({ date: -1 }).exec(function(err, posts) {
    res.render('posts', {
      title: "Julie\'s Happiness Log",
      posts: posts
    });
  });
});

router.get('/pictures', function(req, res, next) {
  res.render('pictures', {
      title: "Julie\'s Happiness Log",
  });
});
