var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('landing');
});

router.get('/loginpage', function(req, res) {
  res.render('login');
});

/*
router.post('/login', function(req, res) {

});


router.post('/register', function(req, res) {

});
*/

module.exports = router;
