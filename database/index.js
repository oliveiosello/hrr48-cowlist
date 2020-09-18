const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('CONNECTED');
});

module.exports = connection;