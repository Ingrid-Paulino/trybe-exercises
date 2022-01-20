const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const rescue = require('express-rescue');


const app = express();

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
})

// exercicio 1
app.get('/', function (_req, res) {
  const { name } = req.body;
    if(age > 17) return res.status(200).json({ "message": `Hello, ${name}!` })

  res.json({ "message": 'pong' })
});

// exercicio 2
app.post('/hello', funHello);

function funHello(req, res) {
  const { name } = req.body;

  res.status(200).json({ "message": `Hello, ${name}!` })
}

// exercicio 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(age <= 17) return res.status(401).json(`{ "message": "Unauthorized" }`)

  res.status(200).json(`{ "message": "Hello, ${name}!" }`)
})

// http POST :3001/greetings name="ingrid" age=33

// exercicio 4
//nn soube fazer a pesquisa
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})
// http PUT :3001/users/ingrid/2

// exercicio 5


