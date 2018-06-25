var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('index', { title: 'About Us' });
});
router.get('/fellows', function(req, res, next) {
  res.render('index', { title: 'Fellows' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/portal', function(req, res, next) {
  res.render('index', { title: 'Portal' });
});
module.exports = router;
