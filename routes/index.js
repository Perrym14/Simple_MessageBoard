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

//POST form information.
router.post('/new', function(req, res){
  var author = req.body.user;
  var newMessage = req.body.text;

  messages.push(
    {
      text: newMessage,
      user: author,
      added: new Date()
    }
    );
res.redirect('/');
});


module.exports = router;
