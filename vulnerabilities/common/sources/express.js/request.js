var express = require('express');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var router = express.Router();
router.use(cookieParser());
router.use(bodyParser.json())

// URL Query string parameters
router.all('/query/string/parameters', function (req, res) {

  eval(req.query['a']) // Noncompliant (S5334)
  eval(req.query.a) // Noncompliant
  eval(req.query['b'][0]) // Noncompliant
  eval(req.query.b[0]) // Noncompliant
  eval(req.param('a')) // Noncompliant
  eval(req.param('b')[0]) // Noncompliant
})

// URL parameters
// curl http://localhost:3001/request/url/parameters/a/b
router.all('/url/parameters/:a/:b', function (req, res) {

  eval(req.params['a']) // Noncompliant
  eval(req.params.a) // Noncompliant
  eval(req.param('a')) // Noncompliant
})

router.all('/url/validated/parameters/:safe/:unsafe', function (req, res) {
  eval(req.params.safe) // OK, 'safe' has been validated to be a number with 'app.param' (see app.js)
  eval(req.params.unsafe) // Noncompliant
})

// Body parameters
// curl --request POST --header "Content-Type: application/json" --data '{"a":"a","b":[{"c": "c"}]}' http://localhost:3001/request/body
router.all('/body', function (req, res) {

  eval(req.body) // Noncompliant
  eval(req.body.a) // Noncompliant
  eval(req.body['a']) // Noncompliant
  eval(req.body.b[0]) // Noncompliant
  eval(req.body['b'][0]) // Noncompliant
  eval(req.body.b[0].c) // Noncompliant
  eval(req.body['b'][0].c) // Noncompliant

  eval(req.param('a')) // Noncompliant
  eval(req.param('b')[0].c) // Noncompliant

  eval(req.param.safe) // Noncompliant -- app.param doesn't apply for body parameters
  eval(req.param.unsafe) // Noncompliant
})

// URL path components and query string
// curl http://localhost:3001/request/url/path/components?a=a
router.all('/url/path/components', function (req, res) {

  var url = req.url // "/url/path/components?a=a"
  eval(url) // Noncompliant

  var originalUrl = req.originalUrl // "/request/url/path/components?a=a"
  eval(originalUrl) // Noncompliant

  // Not sources
  var baseUrl = req.baseUrl // "/request"
  eval(baseUrl) // Compliant

  var path = req.path // "/url/path/components"
  eval(path) //Compliant
})

// URL path with a wildcard
// curl http://localhost:3001/request/url/path/components/;console.log("hello")
router.all('/url/path/components/*', function (req, res) {

  var path = req.path // "/url/path/components/;console.log(\"hello\")"
  eval(path) // Noncompliant
})

// HTTP headers
// curl http://localhost:3001/request/headers
router.all('/headers', function (req, res) {

  // Request headers
  eval(req.get('accept')) // Noncompliant
  eval(req.header('accept')) // Noncompliant
  eval(req.headers["accept"]) // Noncompliant
  eval(req.headers.accept) // Noncompliant

  var accepts = req.accepts() // ["text/html", "application/xhtml+xml", "image/webp", "application/xml", "*/*"]
  eval(req.accepts[0]) // Noncompliant

  var acceptsCharsets = req.acceptsCharsets() // ["utf-8", "iso-8859-1"]
  eval(acceptsCharsets[0]) // Noncompliant

  var acceptsEncodings = req.acceptsEncodings()  // ["gzip", "deflate", "identity"]
  eval(acceptsEncodings[0]) // Noncompliant

  var acceptsLanguages = req.acceptsLanguages() // ["fr", "fr-FR", "en-US", "en"]
  eval(acceptsLanguages[0]) // Noncompliant

  eval(req.cookies['cookie_name']) // Noncompliant
  eval(req.cookies.cookie_name) // Noncompliant

  // Not sources
  var accepts = req.accepts("html") // "html" or false
  accepts = req.accepts(["html"]) // "html" or false
  eval(accepts) // Compliant

  var acceptsCharsets = req.acceptsCharsets("urf-8") // "utf-8" or false
  acceptsCharsets = req.acceptsCharsets(["urf-8"]) // "utf-8" or false
  eval(acceptsCharsets)  // Compliant

  var acceptsEncodings = req.acceptsEncodings("gzip") // "gzip" or false
  acceptsEncodings = req.acceptsEncodings(["gzip"]) // "gzip" or false
  eval(acceptsEncodings)  // Compliant

  var acceptsLanguages = req.acceptsLanguages("fr") // "fr" or false
  acceptsLanguages = req.acceptsLanguages(["fr"]) // "fr" or false
})

// Other
// curl http://localhost:3001/request/other
router.all('/other', function (req, res) {

  // Not sources
  eval(req.host) // Compliant
  eval(req.hostname) // Compliant
  eval(req.subdomains) // Compliant
  eval(req.ip) // Compliant
  eval(req.ips) // Compliant
  eval(req.method) // Compliant
  eval(req.protocol) // Compliant
  eval(req.httpVersion) // Compliant
})

// Out of scope for MMF-2156 (where this FP is accepted)
router.all('/sanitized', function (req, res, next) {
  if (isNaN(parseInt(req.params.safe))) {
    next(new Error());
  } else {
    next();
  }
}, function (req, res) {
  eval(req.params.safe); // Compliant, validated in the middleware
})

module.exports = router;