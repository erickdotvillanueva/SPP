var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landingPage', { title: 'Guntner Parts Database Test' });
});

router.get('/partSearch', function(req, res, next) {
  res.render('partSearchPage', {title: 'Guntner Parts Search Page'})
});

module.exports = router;
