const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (obj, key, value) => {
  obj[key] = value;
}
addNewKey(lesson2, 'turno', 'noite')
console.log(lesson2);


const objKeys = (obj) =>Object.keys(obj);
console.log(objKeys(lesson1));

// mostra o tamanho de um objeto
const tamanhoObj = (obj) => Object.keys(obj).length;
console.log(tamanhoObj(lesson1));

const valueObj = obj => Object.values(obj);
console.log(valueObj(lesson1));


// agrupando os objetos dentro de outro -- clone de objetos
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
console.log(allLessons);

// falta exercicio 6, 7 e 8 + bonus
