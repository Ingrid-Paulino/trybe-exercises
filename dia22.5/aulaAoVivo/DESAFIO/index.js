const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const ping = require('./middlewares/ping')
// const pingRouter = require('./middlewares/ping')
const hello = require('./middlewares/hello')
const createSimpson = require('./middlewares/createSimpson')
const validateIdSimpson = require('./middlewares/validateIdSimpson')

// usando a forma 2 e 3 do arquivi './middlewares/ping'
app.get('/ping', ping);
app.post('/hello', hello);
app.post('/simpsons', [validateIdSimpson, createSimpson]); //ou
// app.post('/simpsons', validateIdSimpson, createSimpson);
// app.post('/simpsons', validateIdSimpson);

// usando a forma 1 do arquivi './middlewares/ping'
// app.use(ping);

// usando a forma 1 do arquivi './middlewares/ping' com o Router
// app.use('/ping', pingRouter);

app.listen(3001, () => console.log('Rodando na porta 3001'));