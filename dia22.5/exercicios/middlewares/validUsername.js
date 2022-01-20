const validUsername = (req, res, next) => {
  const { username } = req.body;

  if(!username || username.length < 3) {
    return next({
      message: 'invalid usersname',
      status: 400,
    });
  }

  next();
}

module.exports = validUsername;