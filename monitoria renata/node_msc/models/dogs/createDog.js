const connection = require('../connection');

module.exports = async (dogs, breed, age) => {
  const query = `INSERT INTO dogs(dogs, breed, age) VALUES (?, ?, ?)`;
  const [rows] = await connection.execute(query, [dogs, breed, age]);
  return rows.insertId;
};