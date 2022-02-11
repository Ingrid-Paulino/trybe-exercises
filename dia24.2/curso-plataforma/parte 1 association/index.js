const express = require('express');
const { Address, Employee } = require('./models');


const app = express();

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

//ou

// app.get('/employees', (_req, res) => {
//      Employee.findAll({include: { model: Address, as: 'addresses' }})
//       .then((dados) => {
//         res.status(200).json(dados);
//       })
//       .catch ((e) => {
//         console.log(e.message);
//         res.status(500).json({ message: 'Ocorreu um erro' });
//       });
// });

//localhost:3000/employees

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;