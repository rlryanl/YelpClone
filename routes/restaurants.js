var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('restaurantlist');
});

module.exports = router;