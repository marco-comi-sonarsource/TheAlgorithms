const vuln = require('../merge');
const express = require('express')
const app = express()
const port = 3000

function is_obj(val) {
    const type = typeof val;
    return val !== null && (type === 'object' || type === 'function');
}

app.get('/', (req, res) => {
    let dummy_obj1 = {};
    let dummy_obj2 = {};

    let payload_obj = is_obj(req.query.payload) ? req.query.payload : {'payload': req.query.payload};

    vuln.merge(dummy_obj1, payload_obj); // Noncompliant
    res.send("vuln1: " + dummy_obj2.vuln1);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

