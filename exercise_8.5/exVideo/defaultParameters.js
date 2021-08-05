const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// ------------------------------------

const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting('ingrid'); // Welcome usuário!

//---------------------------------------

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

// --------------------------------

// para fixar

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value

};

console.log(multiply(2,2));