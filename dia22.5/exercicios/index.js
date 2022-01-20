const express = require('express');
const error = require('./middlewares/err')
const userRouter = require('./controllers/userRouter');

const app = express();
app.use(express.json());

app.use('/user', userRouter)
app.use(error);

app.listen(3001, () => {
  console.log('Running on port 3001');
});

