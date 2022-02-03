const connection = require('../connection');

module.exports = async() => {
  const query = `SELECT * FROM dogs`;
  const [rows] = await connection.execute(query);
  return rows;
};