var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('restaurantlist');
});

router.get('/:restaurant', function(req, res) {
  res.render('restaurant');
});

module.exports = router;