const fs = require('fs').promises;

module.exports = async (req, res) => {
  const { id } = req.params;

  const simpsons = await fs.readFile('./simpsons.json', 'utf-8').then((response) => JSON.parse(response));

  const simpson = simpsons.find((s) => s.id === +id);

  if (!simpson) return res.status(404).json({ message: 'Simpson not found!'})

  res.status(200).json(simpson);
}