const assert = require('assert');

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    przza: {
      margarita: {
        amount: 1,
        price:25,
      },
      
      pepperoni: {
        amount:1,
        price: 20,
      }
    },
    drinks: {
      coke: {
      type: 'coca-cola Zero',
      price: 10,
      amount: 1,
    }  
  },
  delivery: {
    deliveryPerson: 'Ana Silveira',
    price: 5,
  },
  },
  payment: {
  total: 60,
  },
};

// function getUserData(order) {
//   return 'Rafael Andrade - Rua das Flores, 389, apt 701 - 11-98763-1416'
// } forma porca

//forma 1
// function getUserData(order) {
//   const nome = order.name; // podemos usar variaveis ou ir colocando direto 
//   return `${nome} - ${order.address.street}, ${order.address.number}, apt ${order.address.apartment} - ${order.phoneNumber}`
// } //forma correta de um bom desenvolvedor //com função use return

//forma 2 - com arrow function
const getUserData = order => `${order.name} - ${order.address.street}, ${order.address.number}, apt ${order.address.apartment} - ${order.phoneNumber}`

assert.strictEqual(typeof getUserData, 'function') // testando se getUserData seja uma função
assert.strictEqual(
  getUserData(order), 
  'Rafael Andrade - Rua das Flores, 389, apt 701 - 11-98763-1416'
);

const array1 = [1, 2, 3]
for (let i = 0; i < array1.length; i += 1) {
  assert.notStrictEqual(
    
  )
}