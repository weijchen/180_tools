var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// chooseMe ====================================
router.get('/chooseMe', function(req, res, next) {
  res.render('chooseMe/index', { title: 'Express' });
});

router.get('/chooseMe/plus1', function(req,res){
	res.render('chooseMe/plus1', {title: 'Express'});
});

router.get('/chooseMe/plus2', function(req,res){
	res.render('chooseMe/plus2', {title: 'Express'});
});

router.get('/chooseMe/goal', function(req,res){
	res.render('chooseMe/goal', {title: 'Express'});
});

router.get('/chooseMe/minus1', function(req,res){
	res.render('chooseMe/minus1', {title: 'Express'});
});

router.get('/chooseMe/minus2', function(req,res){
	res.render('chooseMe/minus2', {title: 'Express'});
});

router.get('/chooseMe/hell', function(req,res){
	res.render('chooseMe/hell', {title: 'Express'});
});

// randomNumber ====================================
router.get('/randomColor', function(req, res, next) {
  res.render('randomColor/index', { title: 'Express' });
});

// paintBoard ====================================
router.get('/paintBoard', function(req, res, next) {
  res.render('paintBoard/index', { title: 'Express' });
});

module.exports = router;
