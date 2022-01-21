const express = require('express');
const bodyParser = require('body-parser');

const { getAll, create, getById } = require('./models/characterModel');

const app = express();

app.use(bodyParser.json());

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
  const { name, cartoon } = req.body;
  
  const character = await create(name, cartoon);

  res.status(201).json(character)
});

app.listen(PORT, () => console.log(`here we go in port ${PORT}!`))