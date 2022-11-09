var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

// body-parser middlewares have a verify callback
// curl --request POST --header "Content-Type: application/octet-stream" --data 'console.log("HELLO")' http://localhost:3001/body-parser/
let raw = bodyParser.raw({verify: function (req, res, buf, encoding) {
    // First parameter of the 'verify' callback is a Request object
    eval(req.query.input) // Noncompliant

    // Third parameter if a Buffer containing tainted user inputs
    eval('('+String(buf)+')') // Noncompliant

}})
router.use(raw)

// curl --request POST --header "Content-Type: application/json" --data 'console.log("HELLO")' http://localhost:3001/body-parser/
let json = bodyParser.json({verify: function (req, res, buf, encoding) {
    eval('('+String(buf)+')') // Noncompliant
}})
router.use(json)

// curl --request POST --header "Content-Type: text/plain; charset=UTF-8" --data 'console.log("HELLO")' http://localhost:3001/body-parser/
let text = bodyParser.text({verify: function (req, res, buf, encoding) {
    eval('('+String(buf)+')') // Noncompliant
}})
router.use(text)

// curl --request POST --header "Content-Type: application/x-www-form-urlencoded" --data 'console.log("HELLO")' http://localhost:3001/body-parser/
let urlencoded = bodyParser.urlencoded({ extended: false, verify: function (req, res, buf, encoding) {
    eval('('+String(buf)+')') // Noncompliant
}})
router.use(urlencoded)

// 'express' package contains built in middlewares based on body-parser 
express.raw({verify: function (req, res, buf, encoding) {
    eval('('+String(buf)+')') // Noncompliant
}})

module.exports = router;