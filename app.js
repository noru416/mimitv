var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var sha256 = require('sha256');
var mysql = require('mysql');

var conn = mysql.createConnection({
  host     : 'mimitv.net',
  user     : 'root',
  password : 'tmvlzj18',
  database : 'mimi'
});
conn.connect();

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.post('/login', function(req, res) {
  var uname = req.body.username;
  var pwd = req.body.password;
  var sql = 'SELECT * FROM users WHERE username=?';
  conn.query(sql, [uname], function(err, results) {
    if (err) {
      console.log('There is no user');
    } else {
      for(var i=0; i<results.length; i++) {
        var user = results[i];
        if(uname === user.username && sha256(pwd) === user.password) {
          res.cookie('displayName', user.displayName);
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      }
    }
  });
});

app.post('/createAccount', function(req, res){
  var user = {
    username: req.body.username,
    password: sha256(req.body.password),
    displayName: req.body.displayName
  };
  var sql = 'INSERT INTO users SET ?';
  conn.query(sql, user, function(err, results){
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.redirect('/login');
    }
  });
});

app.post('/write', function(req,res) {
  var backURL = req.header('Referer') || '/';
  var date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  var article = {
    username: req.cookies.displayName,
    title: req.body.title,
    content: req.body.content,
    created: date
  };
  var sql = 'INSERT INTO board SET ?';
  conn.query(sql, article, function(err, results){
    console.log(results);
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.redirect('/ community');
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});

module.exports = app;
