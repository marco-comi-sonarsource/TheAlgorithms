const { connect } = require("./db");
const assert = require("assert");

function noncompliant(req, res) {
  connect((db) => {
    const users = db.collection("users");

    users
      .find({ $where: `this.username == '${req.query.username}'` }) // Noncompliant (S5334)
      .toArray((err, docs) => {
        console.log(docs);

        assert.strictEqual(err, null);
        res.write(JSON.stringify(docs));
        res.end();
      });
  });
}

function noncompliantpostobject(req, res) {
  connect((db) => {
    const users = db.collection("users");

    console.dir(req.body);

    let query = { username: req.body.user, password: req.body.password };

    console.log(query);

    users
      .find(query) // Noncompliant (S5147)
      .toArray((err, docs) => {
        console.log(docs);
        assert.strictEqual(err, null);
        res.write(JSON.stringify(docs));
        res.end();
      });
  });
}

function noncompliantqueryobject(req, res) {
  connect((db) => {
    const users = db.collection("users");

    let query = { username: req.query.user, password: req.query.password };

    console.log(query);

    users
      .find(query) // Noncompliant (S5147)
      .toArray((err, docs) => {
        console.log(docs);
        assert.strictEqual(err, null);
        res.write(JSON.stringify(docs));
        res.end();
      });
  });
}

function compliantqueryobject(req, res) {
  connect((db) => {
    const users = db.collection("users");

    let query = {
      username: req.query.user.toString(),
      password: req.query.password.toString(),
    };

    console.log(query);

    users
      .find(query) // Compliant (S5147)
      .toArray((err, docs) => {
        console.log(docs);
        assert.strictEqual(err, null);
        res.write(JSON.stringify(docs));
        res.end();
      });
  });
}

function compliant(req, res) {
  connect((db) => {
    const users = db.collection("users");

    users
      .find({ username: req.query.username.toString() })
      .toArray((err, docs) => {
        assert.strictEqual(err, null);
        res.write(JSON.stringify(docs));
        res.end();
      });
  });
}

module.exports = {
  compliant,
  noncompliant,
  noncompliantqueryobject,
  noncompliantpostobject,
  compliantqueryobject,
};
