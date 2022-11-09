var express = require('express');
var router = express.Router();

// Route level middlewares
// No mount path, first parameter is the middleware function
router.use(function (req, res, next) {
    eval(req.query.input) // Noncompliant (S5334)
    next()
})

// With a mount path, first parameter is the string (mount path), second is the middleware function
router.use("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

// With a mount path, first parameter is the string (mount path), second is the middleware function
router.use("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
}, function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

var cb0 = function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next();
}

// Single middleware function
router.use('/', cb0);
  
var cb1 = function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next();
}

// Collection of middleware functions
router.use('/', [cb0, cb1]);

// Error handler middleware function takes 4 parameters. Request object is the second parameter. 
router.use(function (err, req, res, next) {
    eval(req.query.input) // Noncompliant
    next();
})

// All HTTP methods from app and router
router.all("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

// GET HTTP method only
router.get("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

// POST HTTP method only
router.post("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

// DELETE HTTP method only
router.delete("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

// PATCH HTTP method only
router.patch("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

// OPTIONS HTTP method only
router.options("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

// HEAD HTTP method only
router.head("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.trace("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.copy("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.lock("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.mkcol("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.move("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.purge("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.propfind("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.proppatch("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.unlock("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.report("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.mkactivity("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.checkout("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.merge("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router["m-search"]("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.notify("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.subscribe("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.unsubscribe("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.search("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

router.connect("/" ,function (req, res, next) {
    eval(req.query.input) // Noncompliant
    next()
})

module.exports = router;