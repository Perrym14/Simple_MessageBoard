var express = require('express');
var router = express.Router();

var messages = [{
  text: 'Hey Ron',
  user: 'Willy',
  added: new Date()},
  {
  text: 'Hey Willberg',
  user: 'Ron',
  added: new Date()
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Super Simple Message Board', messages: messages });
});

module.exports = router;
