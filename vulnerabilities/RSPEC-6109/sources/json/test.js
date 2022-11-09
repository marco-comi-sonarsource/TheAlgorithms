const vuln = require('../merge');
const fs = require('fs');

// Proof of Concept
var dummy_obj1 = {};
var dummy_obj2 = {};

var payload = fs.readFileSync("../payload1.json", "utf8"); // This variable has to be user-controlled.
var payload_obj = JSON.parse(payload); // This function creates a sensitive object.

vuln.merge(dummy_obj1, payload_obj); // Noncompliant
console.log("vuln1: " + dummy_obj2.vuln1);
