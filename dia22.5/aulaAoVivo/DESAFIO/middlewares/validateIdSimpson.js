const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  const { id } = req.body;

  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((content) => JSON.parse(content));

  const simpson = simpsons.find((s) => s.id === id);

  if (simpson) return res.status(500).json({ message: 'Não é possível cadastrar esse simpson!'});

  next();
}