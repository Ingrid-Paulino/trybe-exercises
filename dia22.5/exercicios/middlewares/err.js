module.exports = async (err, req, res, next) => {
  return res.status(400).send(`Message: ${err.message} \n Status: ${err.status}`)
};