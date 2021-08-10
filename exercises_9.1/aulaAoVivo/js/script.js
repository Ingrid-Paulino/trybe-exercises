// // nn faça isso 
// // isso é um temporizador criado, mas que não foi viavel
// //trava o loop do js
// const sleep = sleepDuration => {
//   const now = new Date().getTime();
//   while(new Date().getTime() < now + sleepDuration);
// };


// console.log('LANCHES');

// const funcao1 = () => {
//   sleep(3000);
//   console.log('1- big Mac');
// }
// const funcao2 = () => {
//   sleep(3000);
//   console.log('2 - Big Tasty');
// };

// funcao1();
// funcao2()

// console.log('Liberado pra passear......');







// // use o setTimeout
// // nao trava o luop

// console.log('LANCHES');

// const funcao1 = () => {
//   setTimeout(() => {
//     console.log('1- big Mac');
//   }, 3000)
  
// }
// const funcao2 = () => {
//   setTimeout(() => {
//     console.log('2 - Big Tasty');
//   }, 3000)
// };

// funcao1();
// funcao2()

// console.log('Liberado pra passear......');










// console.log('LANCHES');

// const funcao1 = () => {
//   setTimeout(() => {
//     console.log('1- big Mac');
//   }, Math.random() * 10000)
  
// }
// const funcao2 = () => {
//   setTimeout(() => {
//     console.log('2 - Big Tasty');
//   }, Math.random() * 10000)
// };

// funcao1();
// funcao2()

// console.log('Liberado pra passear......');



// ajustando a ordem
// levando os dois laches juntos
// lanche da função2 so vai ser enviado quando o 1 estiver pronto
console.log('LANCHES');

const funcao1 = (callback) => {
  setTimeout(() => {
    console.log('1- big Mac');
    callback();
  }, 3000)
  
}
const funcao2 = () => {
  setTimeout(() => {
    console.log('2 - Big Tasty');
    console.log('Liberado pra passear......');
  }, 1000)
};

funcao1(funcao2);


