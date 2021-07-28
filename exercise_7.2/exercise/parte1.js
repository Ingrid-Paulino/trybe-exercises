const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.order.delivery.deliveryPerson;
  const entrega = order.name;
  const tell = order.phoneNumber;
  const rua = order.address.street;
  const n = order.address.number;
  const ap = order.address.apartment;
  console.log(`Olá ${name}, entrega para: ${entrega}, Telefone: ${tell}, Rua: ${rua}, N°: ${n}, AP: ${ap}`)
}
customerInfo(order);
// Adicione abaixo as informações necessárias
const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva'
  const name = order.order.delivery.deliveryPerson;
  order.payment.total = 50;
  const preco = order.payment.total;
  
  console.log(`Olá ${name}, o total do seu pedido de Marguerita, pepperoni e Coca-cola R$${preco},00.`)
}
orderModifier(order);
