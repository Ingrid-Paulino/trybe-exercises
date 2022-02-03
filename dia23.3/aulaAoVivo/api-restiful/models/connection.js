module.exports = require("mysql2/promise").createPool({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "rest_aula",
});