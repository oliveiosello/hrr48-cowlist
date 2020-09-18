const express = require('express');
const database = require('../database');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/', express.static('dist'));


app.get('/api/cows', (req, res) => {
  let queryStr = `SELECT * FROM cows`;
  database.query(queryStr, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  })
});

app.post('/api/cows', (req, res) => {
  // no id if auto increment?
  // let data = req.body
  // console.log(req.body)
  let queryStr = `INSERT INTO cows SET ?`;
  console.log(req.body)
  database.query(queryStr, req.body, (err, results) => {
    if (err) {
      throw (err);
    }
    res.end(JSON.stringify(results));
  })

});


let port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});