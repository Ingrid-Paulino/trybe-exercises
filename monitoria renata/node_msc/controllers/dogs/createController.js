const createDog = require('../../services/dogs/createDog');

const CREATED = 201;

module.exports = async (req, res, next) => {
  try {
    const dogData = req.body;

    const dogId = await createDog(dogData);
    if ('error' in dogId) return next(dogId.error);

    return res.status(CREATED).send(dogId);
  } catch (err) {
    next(err);
  }
};