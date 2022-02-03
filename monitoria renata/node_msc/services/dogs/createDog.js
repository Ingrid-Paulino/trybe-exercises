const dogsSchema = require('../../schemas/dogsSchema');
const createDog = require('../../models/dogs/createDog');
const { errorCreateDog } = require('../../utils/errors');

module.exports = async (dogData) => {
  const { error } = dogsSchema.validate(dogData);
  if (error) return { error };

  const { dogs, breed, age } = dogData;
  const dogId = await createDog(dogs, breed, age);
  if (!dogId) return { error: errorCreateDog }

  return { id: dogId };
};