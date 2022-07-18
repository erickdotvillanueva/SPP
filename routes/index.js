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

router.get('/partUpdate', function(req, res, next) {
  res.render('partUpdatePage')
});

router.get('/partCreateDelete', function(req, res, next) {
  res.render('partCreateDeletePage')
});

router.get('/shoppingCart', function(req, res, next) {
  res.render('shoppingCartPage')
});

module.exports = router;
