const characterModel = require('./models/characterModel');

const main = async () => {
  await characterModel.create("Nico", "Irmão do Jorel");

  const characters = await characterModel.getAll();

  console.log(characters);
};

// connection.execute('SELECT * FROM characters')
//   .then((result) =>  console.log(result))

main();