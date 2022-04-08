class Client {
  constructor(public name: string) {
    console.log(`name: ${name}`);
    this.name = name;
  }
}

class ItemOrder {
  namesOrder: string;
  price: number;
  
  constructor(namesOrder: string, price: number){
    this.namesOrder = namesOrder,
    this.price = price
  }

  set priceOrder(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo')
  }
}

class Order {
  // public nameClient: Client;
  // public consumedItens: ItemOrder[] = [];
  // public formPayment: string;
  // public haveDiscont: number = 0;
  // constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
  constructor(
    public nameClient: Client,
    public consumedItens: ItemOrder[] = [],
    public formPayment: string,
    public discont: number = 0,
    ) {
    this.nameClient = nameClient,
    this.consumedItens = consumedItens,
    this.formPayment = formPayment,
    this.discont = discont
  }

  set client(value: Client) {
    this.client = value;
  }

  set items(value: ItemOrder[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this.consumedItens = value;
  }

  totalOrder(): number {
    const res = this.consumedItens.reduce((previousValue, item) => previousValue += item.price, 0)
    return res;
  }

  calculateTotalWithDiscount(): number {
    return this.totalOrder() * (1 - this.discont);
  }
}

const client = new Client('João');

const sandwiche = new ItemOrder('Sandwiche Natural', 5.00);
const juice = new ItemOrder('Suco de Abacaxí', 5.00);
const dessert = new ItemOrder('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.totalOrder());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());