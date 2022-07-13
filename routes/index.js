var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingPage', { title: 'Guntner Parts Database Test' });
});

router.get('/partSearch', function(req, res, next) {
  res.render('partSearchPage')
});

router.get('/adminPage', function(req, res, next) {
  res.render('adminLandingPage')
});

module.exports = router;
