const myPromise = new Promise((resolve, reject) => {
  const nome = "Ingrid"

  if (nome === "Ingrid") {
    resolve('Usuario encontrado')
  } else {
    reject('Usuario não encontrado')
  }
})

myPromise.then((data) => {
  console.log(data);
})

// Encadeamentos de then's
const myPromise = new Promise((resolve, reject) => {
  const nome = "Ingrid"

  if (nome === "Ingrid") {
    resolve('Usuario encontrado')
  } else {
    reject('Usuario não encontrado')
  }
})

myPromise.then((data) => {
  return data.toLowerCase()
})
.then((stringModificada) => {
  console.log(stringModificada);
})


//Retorno do catch - tratando o reject

const myPromise = new Promise((resolve, reject) => {
  const nome = "João"

  if (nome === "Ingrid") {
    resolve('Usuario encontrado')
  } else {
    reject('Usuario não encontrado')
  }
})

myPromise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(`Aconteceu um erro: ${error}`);
})


// Resolver/tratando varias promeças

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 ok!'); //resposta não é de imediato
  });
});
// essas que terao resposta de imedoato, esperara a p1 finalizar para aparecer
let p2 = new Promise((resolve, reject) => {
  resolve('P2 ok!');
});

let p3 = new Promise((resolve, reject) => {
  resolve('P3 ok!');
});

let resolveAll = Promise.all(([p1, p2, p3])).then((data) => {
  console.log(data);
});

console.log(resolveAll);