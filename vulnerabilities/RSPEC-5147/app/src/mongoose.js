const assert = require("assert");
const mongoose = require("mongoose");
const { url, options } = require("./db");

mongoose.connect(`${url}/myproject`, options).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("DB error: " + err);
  }
);

const userModel = new mongoose.Schema(
  {
    username: String,
  },
  { collection: "users" }
);

const User = mongoose.model("User", userModel, "users");

const u1 = new User({ username: "mongoose" });
u1.save();

function noncompliant(req, res) {
  console.log("mongoose noncompliant");
  let query = { $where: `this.username == '${req.query.username}'` };
  User.find(query, (err, users) => { // Noncompliant (S5334)
    assert.strictEqual(null, err);
    res.write(JSON.stringify(users));
    res.end();
  });
}

function compliant(req, res) {
  console.log("mongoose compliant");
  let query = { username: req.query.username.toString() };
  User.find(query, (err, users) => {
    assert.strictEqual(null, err);
    res.write(JSON.stringify(users));
    res.end();
  });
}

module.exports = {
  compliant,
  noncompliant,
};
