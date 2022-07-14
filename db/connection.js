const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',

  user: 'root',

  password: 'Truck-kun5!!',
  database: ''
});

module.exports = db;