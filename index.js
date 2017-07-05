const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const app = express();
const MongoClient = require("mongodb").MongoClient

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");


var url = 'mongodb://localhost:27017/myproject'

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

et findDocuments = function(robotDirectory, callback) {
  let collection = robotDirectory.collection('robotEmployees');
  collection.find({}).toArray(function(err, docs) {
    robotData = docs;
    console.log(docs);
    callback(docs);
  });

app.listen(3000, function(){
  console.log("It's working");
})
