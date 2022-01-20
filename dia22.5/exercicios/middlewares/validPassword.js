const validPassword = (req,res, next) => {
  const { password } = req.body;
  
  if(password.length < 4 || password.length > 8) {
    return next({
      message: 'invalid password',
      status: 400,
    });
  }  

  next();
}

module.exports = validPassword;