var express = require('express');
var router = express.Router();
var path = require('path');

var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', {title: "Chat"});
});

module.exports = router;
