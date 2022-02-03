const express = require('express');
const readController = require('../controllers/dogs/readController');
const createControllers = require('../controllers/dogs/createController');

const dogsRoute = express.Router({ mergeParams: true });

dogsRoute.get('/', readController);
dogsRoute.post('/', createControllers);

module.exports = dogsRoute;