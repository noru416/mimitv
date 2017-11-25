var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var mysql = require('mysql');

var conn = mysql.createConnection({
  host     : 'mimitv.net',
  user     : 'root',
  password : 'tmvlzj18',
  database : 'mimi'
});
conn.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/gallery', function(req, res, next) {
  res.render('index');
});
router.get('/community', function(req, res, next) {
    res.redirect('/community/list/1');
});
router.get('/community/list/:page', function(req, res, next) {
    var page = req.params.page;
    var min = (page-1)*10;
    var max = page*10;
    conn.query(`SELECT * FROM board`, function(err, result) {
      if(err){
	        throw err;
	    } else {
          var articleN = result.length;
	        res.render('community', { rows: result, min: min, max: max, page: page});
	    }
    // conn.query(`SELECT * FROM board LIMIT ${min}, ${max}`, function(err, result) {
    //   if(err){
	  //       throw err;
	  //   } else {
    //       // if(page >= Math.ceil(result.length/10+2)) {
    //       //   res.render('error');
    //       // }
	  //       res.render('community', { rows: result, min: min, max: max});
    //
	  //   }
	});
});
router.get('/write', function(req, res, next) {
  if (req.cookies.displayName === '') {
    res.redirect('/login');
  }
  res.render('write');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/createAccount', function(req, res, next) {
  res.render('createAccount');
});

module.exports = router;
