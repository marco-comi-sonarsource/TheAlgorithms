const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
let host = process.env.MONGO_HOST || "localhost";
let port = process.env.MONGO_PORT || 27017;
const url = `mongodb://${host}:${port}`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Database Name
const dbName = "myproject";

const connect = (callback) => {
  console.log("Will connect to mongo");
  MongoClient.connect(url, options, (err, client) => {
    assert.strictEqual(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    callback(db, () => {
      client.close();
    });
  });
};

module.exports = {
  url,
  options,
  connect,
};
