const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',

  user: 'root',

  password: 'Code4Life!',
  database: 'employees'
});

module.exports = db;