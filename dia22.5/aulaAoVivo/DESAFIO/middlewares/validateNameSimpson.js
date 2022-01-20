const fs = require('fs').promises;

module.exports = async (req, res, next) => {
  const { name } = req.body;
  
  if (!name) return res.status(500).json({ message: 'Nome é obrigatório'});

  next();
}