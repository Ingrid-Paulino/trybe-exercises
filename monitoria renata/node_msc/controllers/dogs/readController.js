const getDogs = require('../../services/dogs/getDogs');
const StatusCodes = require('http-status-codes');

module.exports = async (_req, res, next) => {
  try {
    const dogs = await getDogs();

    res.status(StatusCodes.OK).send(dogs);
  } catch (err) {
    next(err); //vai para o middleware de erro
  }
};