const fs = require('fs');

//Readfile -> ler qualquer tipo de arquivo.(txt,json..)

// Jeito atual/hype
const mainComAsync = async () => {
  try {
    const content = await fs.promises.readFile('./arquivo1.txt', 'utf-8');
    console.log(`mainComAsync: ${content}`);
  } catch (e) {
    console.log(e);
  }
}

mainComAsync();

// com then e catch
fs.promises.readFile('./arquivo1.txt')
  .then((response) => console.log(`Usando com then: ${response}`))
  .catch((err) => console.log(err));


  

// Jeito arcaico/raiz
const mainComCallback = () => {
  fs.readFile('./arquivo1.txt', 'utf-8', (err, content) => {
    // equivalente ao catch
    if (err) console.log(err);

    // equivalente ao then
    console.log(`Main Com Callback: ${content}`);
  });
}

mainComCallback();



console.log('Executando teoricamente após a chamada da função main!')
