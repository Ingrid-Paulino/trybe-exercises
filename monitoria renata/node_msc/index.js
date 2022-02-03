const express = require('express');
const { use } = require('./routes');
const routes = require('./routes');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());

const PORT = 3001;

app.use(routes);

app.use(error); // vem sempre por ultimo

app.listen(PORT, console.log(`rodando na ${PORT}`))