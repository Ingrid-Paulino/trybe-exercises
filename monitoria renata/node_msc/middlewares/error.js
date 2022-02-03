const INTERNAL_SERVER_ERROR = 500;
const UNPROCESSABLE_ENTITY = 422;

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(UNPROCESSABLE_ENTITY).json({ message: err.details[0].message });
  }

  if ('status' in err) {
    return res.status(err.status).send({ message: err.message });
  }
  
  console.log(err);
  return res.status(INTERNAL_SERVER_ERROR).end();
};