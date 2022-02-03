const express = require('express');
const bodyParser = require('body-parser');

const { getAll, create, getById } = require('./models/characterModel');

const app = express();

app.use(bodyParser.json());

//usar a porta dentro de uma variavel  é interesante para se eu quiser abrir  a aplicação em outra porta
//ex comando : PORT=3005 npm run dev
const PORT = process.env.PORT || '3001';

app.get('/characters', async (req, res) => {
  const characters = await getAll();

  res.status(200).json(characters);
});

app.get('/character/:id', async (req, res) => {
  const { id } = req.params;
  const characters = await getById(id);

  res.status(200).json(characters);
});

app.post('/characters', async (req, res) => {
  const { name, cartoon } = req.body; //ou
  // const name = req.body.name;
  // const cartoon = req.body.cartoon;

  
  const character = await create(name, cartoon);

  res.status(201).json(character)
});

app.listen(PORT, () => console.log(`here we go in port ${PORT}!`))