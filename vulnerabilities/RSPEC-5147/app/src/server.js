const db = require("./db");
const express = require("express");
const assert = require("assert");
const {
  noncompliant,
  noncompliantqueryobject,
  compliantqueryobject,
  noncompliantpostobject,
  compliant,
} = require("./mongodb");

let port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

//req.app.set('query parser', 'simple');
//req.app.set('query parser', 'extended');

const insertDocuments = (db, callback) => {
  console.log("Inserting documents");

  const users = db.collection("users");

  users.deleteMany({});
  users.insertMany(
    [
      { username: "admin", password: "secret1" },
      { username: "user1", password: "secret2" },
      { username: "user2", password: "secret3" },
    ],
    function (err, result) {
      assert.strictEqual(err, null);
      assert.strictEqual(3, result.result.n);
      assert.strictEqual(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    }
  );
};

db.connect(insertDocuments);

// VULN: curl -d "{\"user\":\"admin\", \"password\": { \"\$ne\":1 }}" -H "Content-Type: application/json" -X POST http://localhost:4000/S5147/noncompliantpostobject
app.post("/S5147/noncompliantpostobject", noncompliantpostobject);

// http://localhost:4000/S5147/noncompliantqueryobject?user=admin&password=secret1
// http://localhost:4000/S5147/noncompliantqueryobject?user=admin&password=idontknow
// VULN: http://localhost:4000/S5147/noncompliantqueryobject?user=admin&password[%24ne]=
app.get("/S5147/noncompliantqueryobject", noncompliantqueryobject);

// http://localhost:4000/S5147/compliantqueryobject?user=admin&password=secret1
// http://localhost:4000/S5147/compliantqueryobject?user=admin&password=idontknow
// VULN: http://localhost:4000/S5147/compliantqueryobject?user=admin&password[%24ne]=
app.get("/S5147/compliantqueryobject", compliantqueryobject);

// to inject we append ' || 'a' = 'a to the query, which makes condition always true
// http://localhost:4000/S5147/noncompliant?username=admin%27%20||%20%27a%27%20==%20%27a
app.get("/S5147/noncompliant", noncompliant);

// http://localhost:4000/S5147/compliant?username=admin%27%20||%20%27a%27%20==%20%27a
app.get("/S5147/compliant", compliant);

const mongoose = require("./mongoose");
// http://localhost:4000/S5147/mongoose/noncompliant?username=admin%27%20||%20%27a%27%20==%20%27a
app.get("/S5147/mongoose/noncompliant", mongoose.noncompliant);
// http://localhost:4000/S5147/mongoose/compliant?username=admin
app.get("/S5147/mongoose/compliant", mongoose.compliant);

const server = app.listen(port, function () {
  console.log("Listening on port " + port);
});
