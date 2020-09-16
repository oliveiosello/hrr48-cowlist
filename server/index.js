const express = require('express');
const database = require('../database');
const bodyParser = require('body-parser');

const app = express();


app.get('/', (req, res) => {
  res.end('GET REQUEST');
});

app.post('/', (req, res) => {
  res.end('POST REQUEST');
});


let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});