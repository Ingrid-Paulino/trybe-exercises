const fs = require('fs');


async function main() {
  console.log('começou');

  await fs.promises.readFile('./arquivo1.txt', 'utf-8').then((content) => console.log(content));
  // const content = fs.readFileSync('./arquivo1.txt', 'utf-8');
  // console.log(content);
  
  console.log('terminou');
}


main();