const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'live_lecture_23_1'
});

module.exports = connection;