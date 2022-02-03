const getAllDogs = require('../../models/dogs/getAllDogs');

module.exports = async () => {
  const dogs = await getAllDogs();

  return dogs;
};