const BAD_REQUEST = 400;

const errorCreateDog = {
  status: BAD_REQUEST,
  message: 'Não foi possivel inserir um novo dog'
};

module.exports = { errorCreateDog };

