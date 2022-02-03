const express = require('express');

const route = express.Router({ mergeParams: true });

const dogsRouter = require('./dogsRoutes');

route.use('/dogs', dogsRouter);

module.exports = route;
