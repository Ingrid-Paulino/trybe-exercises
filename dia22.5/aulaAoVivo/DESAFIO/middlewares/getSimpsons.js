const fs = require('fs').promises;

module.exports = async (_req, res) => {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((response) => JSON.parse(response));

  res.status(200).json(simpsons);
}