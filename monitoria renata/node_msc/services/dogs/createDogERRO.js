const createDog = require('../../models/dogs/createDog');
const { errorCreateDog } = require('../../utils/errors');
const dogsSchema = require('../../schemas/dogsSchema');

module.exports = async (dogData) => {
  console.log('entrou no service');
  const { error } = dogsSchema.validate(dogData);
  if (error) return { error };

  const { dogs, breed, age } = dogData;

  const newDog = await createDog(dogs, breed, age);
  if (!newDog) return { error: errorCreateDog };
  console.log('retorno do db: ', newDog);
  return newDog;
}