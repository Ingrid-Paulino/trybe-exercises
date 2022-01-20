const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((content) => JSON.parse(content));

  simpsons.push({ id, name });

  await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));

  res.status(201).json({ message: 'Simpson criado com sucesso!' });
}