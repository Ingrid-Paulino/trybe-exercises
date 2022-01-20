//Forma 1
// const ping =require('express')

// ping.get('/ping', function (_req, res) {
//   res.status(200).send('pong!');
// });

// module.exports = ping;


//Forma 1 usando Router--------------------
// const pingRouter =require('express').Router()

// pingRouter.get('/', function (_req, res) {
//   res.status(200).send('pong!');
// });

// module.exports = pingRouter;

//Forma 2 ------------------------------------

// const ping = (_req, res) => {
//   res.status(200).send('pong!');
// };

// module.exports = ping;
// continuação desse formato no index


// Forma 3 --------------------------------------
module.exports = (_req, res) => {
  res.status(200).send('pong!');
}

