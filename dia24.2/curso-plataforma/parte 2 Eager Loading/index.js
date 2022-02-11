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

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        // include: [{ model: Address, as: 'addresses' }],
        //o include pode ser manipulado pela propriedade attributes
        include: [{
          model: Address, as: 'addresses', attributes: { exclude: ['number'] },
        }],
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

//localhost:3000/employees/1
//localhost:3000/employees/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;