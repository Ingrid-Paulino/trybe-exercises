// ex de destruturação
const obj = { 
  name: 'Renato'
};

const { name } = obj;
console.log(name)

const arrayNames = ['Node', 'React', 'Mysql'];

const [first, second, third] = arrayNames;
const [first1] = arrayNames;

console.log(arrayNames[0])
// console.log(arrayNames[1])
console.log(first)
// console.log(second)
console.log(first1)


console.log(arrayNames)

//node exemplos.js  roda no terminal