// const MongoClient = require("mongodb").MongoClient;
// require("dotenv").config();
// // Connection URL
// const url = process.env.MONGO_URI;
// // Database Name
// const dbName = "myproject";
// const client = new MongoClient(url);
// // Use connect method to connect to the server
// client.connect((err) => {
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   db.collection("Movies", (err, collection) => {
//     collection.insert({ name: "Dave" });
//   });
//   // Use if/else statements to call on functionality of app
//   client.close();
// });

const { MongoClient } = require('mongodb');
require("dotenv").config();
// or as an es module:
// import { MongoClient } from 'mongodb'
// Connection URL
// const url =  'process.env.MONGO_URI';
const client = new MongoClient(process.env.MONGO_URI);
// Database Name
const dbName = 'myProject'
const main = async () => {
  // Use connect method to connect to the server
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('documents')
  await collection.insertOne({name: 'dave'});
  // the following code examples can be pasted here...
  return 'done.'
}
main();