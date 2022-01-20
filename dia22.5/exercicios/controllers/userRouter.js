// const express = require('express'); 
// const router = express.Router(); ou
const router = require('express').Router({ mergeParams: true });

const validPassword = require('../middlewares/validPassword');
const validEmail = require('../middlewares/validEmail');
const validUsername = require('../middlewares/validUsername');
const user = require('./user');

router.post('/register', validUsername, validEmail, validPassword, user);