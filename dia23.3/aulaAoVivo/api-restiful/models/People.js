const conn = require("./connection");

const getAll = async () => {
  const [result] = await conn.execute("SELECT * FROM people");

  return result;
};

const getById = async (id) => {
  const [result] = await conn.execute(`SELECT * FROM people WHERE id = ?`, [
    id,
  ]);

  if (!result.length) return null;

  return result[0];
};

const update = async (id, { name, age }) => {
  const [result] = await conn.execute(
    "UPDATE people SET name = ?, age = ? WHERE id = ?",
    [name, age, id]
  );

  const [result] = await conn.execute(`UPDATE people SET name = ${name}, age = ${age} WHERE id = ${id}`); // Não use esse formato, seus dados podem ser conropidos. ex: http://localhost:3000/pessoas/1 or 5 = 5 --> isso mostraria o usuario de id 5

  return result;
};

module.exports = { getAll, getById, update };