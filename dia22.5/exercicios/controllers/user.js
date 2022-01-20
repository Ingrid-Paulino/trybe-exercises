const BAD_REQUEST = 400;

const user = (_req, res) => {
  try {
    return res.status(201).json({ message: "user created" })
  }
  catch(error) {
    next({
      message: 'invalid request',
      status: BAD_REQUEST,
    });
  }
}

module.exports = user;