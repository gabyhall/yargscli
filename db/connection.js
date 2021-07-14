const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();
// Connection URL
const url = process.env.MONGO_URI;
// Database Name
const dbName = "myproject";
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect((err) => {
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  db.collection("Movies", (err, collection) => {
    collection.insert({ name: "Dave" });
  });
  // Use if/else statements to call on functionality of app
  client.close();
});