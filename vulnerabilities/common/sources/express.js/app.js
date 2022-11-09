var express = require('express')

var request = require('./request.js');
var router = require('./router.js');
var bodyparser = require('./body-parser.js');

var app = express()

app.use('/request', request);
app.use('/router', router);
app.use('/body-parser', bodyparser);

// Application-level middlewares can be define exactly like route-level middlewares (see router.js)
app.use(function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

// app.route(path) method returns a route object
app.route("/").all(function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

app.param('safe', function (req, res, next, safe) {
  if (isNaN(parseInt(safe))) {
    next(new Error());
  } else {
    next();
  }
})
    
app.param('unsafe', function (req, res, next, unsafe) {
  console.log(unsafe);
  next();
})

// app.param second parameter is a callback function. It receive an Request object as first argument
app.param("foo", function (req, res, next, foo) {
    eval(req.query.input) // Noncompliant
    next()
})

app.listen(3001);