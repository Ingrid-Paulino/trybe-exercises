const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};
//forma 1 de acessar os valores
// console.log(product.name)
// console.log(product.price)
// console.log(product.seller)

//forma 2 de acessar os valores
// const { name } = product;
// console.log(name); // Smart TV Crystal UHD

// alem do nome pegando pais valores do objeto
const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD
console.log(seller); // Casas de Minas


// você pode reatribuir o nome da propriedade que deseja acessar ao declará-la como uma variável

// Forma 1
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


// Forma 2
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
const name = student.a;
console.log(name); // Maria



// podemos passar os valores de um objeto como parâmetros para uma função

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas