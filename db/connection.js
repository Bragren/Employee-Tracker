const mysql = require('mysql2');
var util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',

  user: 'root',

  password: 'Code4Life!',
  database: 'employeeDB'
});

connection.connect((err) => {
    if (err) throw err;
});

connection.query = util.promisify(connection.query);

module.exports = connection;