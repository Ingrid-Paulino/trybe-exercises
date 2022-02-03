const mysql = require("mysql2/promise")

const connection = mysql.createPool({
  host: localhost,
  user: "root",
  database: "pets",
  password: "12345678",
  port: 3306,
})

module.exports = connection;