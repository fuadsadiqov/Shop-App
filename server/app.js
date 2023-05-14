const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'Shop-app';

MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection('products');

  const products = require('../data');

  collection.insertMany(products, function(err, result) {
    if (err) throw err;

    console.log('Products inserted into MongoDB!');
    client.close();
  });
});

app.listen(3000, function() {
  console.log('App is listening on port 3000');
});
