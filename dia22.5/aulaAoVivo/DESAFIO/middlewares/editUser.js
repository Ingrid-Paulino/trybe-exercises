module.exports = (req, res) => {
  const { name, age } = req.query;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
}