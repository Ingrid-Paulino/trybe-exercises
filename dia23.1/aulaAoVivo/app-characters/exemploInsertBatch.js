const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'live_lecture_23_1'
});

const values = [
  ['Goku', 'DBZ'],
  ['Vegeta', 'DBZ']
] 

connection.query(
  'INSERT INTO characters (name, cartoon) VALUES ?',
  [values]
);


connection.query(
  'SELECT * FROM characters'
).then(([characters]) => console.log(characters));

console.log(connection.execute('SELECT * FROM characters')) //retorna um Promise { <pending> } por isso é importante colocar de forama assincrona a query da linha 21
