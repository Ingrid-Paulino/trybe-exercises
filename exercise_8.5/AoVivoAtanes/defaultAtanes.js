const greeting = (person) => {
  console.log(`Olá, ${person}`);
}

greeting('que a força esteja com você!');
//   greeting();

//-------------------------------------------------------------------

const greeting = (person = 'Pessoa desconhecidas!!') => {
  console.log(`Olá, ${person}`);
}

greeting('que a força esteja com você!');
  greeting();