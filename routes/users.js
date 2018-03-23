var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.user) {
    res.redirect(`/users/${req.user.username}`);
  }

  else {
    res.redirect('/');
  }
});

router.get('/:user', function(req, res, next) {
  res.render('userprofile');
});

module.exports = router;
