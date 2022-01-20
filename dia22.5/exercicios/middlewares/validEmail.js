const validEmail = (req, res, next) => {
  const { email } = req.body;

  if(!email || !email.includes('@' && '.com')) {
    return next({
      message: 'invalid email',
      status: 400,
    });
  }
  
  next();
}

module.exports = validEmail;