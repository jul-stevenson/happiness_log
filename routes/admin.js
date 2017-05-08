var express = require('express');
var router = express.Router();
var Post = require('../models/post');
var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { 
    title: "Julie\'s Happiness Log", 
  });
});

module.exports = router;

router.post('/', function(req, res) {
  if(!req.body.text) {
    return res.redirect('/admin');
  }

  if(req.body.login != config.login) {
    return res.redirect('/');
  }

  var post = new Post({
    type: req.body.type,
    text: req.body.text,
    date: (new Date())
  });

  post.save(function(err) {
    //res.redirect('/admin');
  });
});
