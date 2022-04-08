class Animal {
    /*
      Ao invés de declarar os atributos antes do construtor, receber parâmetros 
      no construtor e colocá-los nos atributos da classe, se não formos 
      validar, podemos utilizar uma forma simplificada de escrita, simplesmente
      colocando o modificador de visibilidade na frente
      do nome do parâmetro no construtor
  
      Exemplo
      O seguinte código:
  
      public x: number
      constructor(x: number) { this.x = x }
  
      Pode ser substituído por:
  
      constructor(public x: number) { }
    */
   // usamos protected no lugar de private para subclasses poder ter acesso do atributo privado 
    constructor(public name: string, protected birthDate: Date) { }
  
    get age() {
      const today = new Date();
      const age = today.getFullYear() - this.birthDate.getFullYear();
  
      if (today.getMonth() - this.birthDate.getMonth() <= 0 && today.getDate() <= this.birthDate.getDate()) {
        age--;
      }
      return age;
    }
  }
  
  class Mammal extends Animal {
    walk() {
      console.log(`${this.name} está andando!`);
    }
  }
  
  const d1 = new Date();
  d1.setFullYear(2015);
  const m1 = new Mammal('Tatu', d1);
  
  const myFunc = (animal: Animal) => {
    console.log(animal.age);
  }
  
  myFunc(m1);
  m1.walk();
  
  /*
  Saída (código rodado em 2021):
  6
  Tatu está andando!
  */

  interface Animal {
    name: string;
    getBirthDate(): Date;
    age: number;
  }
  
  class Bird implements Animal {
    private _birthDate;
    constructor(public name: string, birthDate: Date) {
      this._birthDate = birthDate;
    }
    get age() {
      return new Date().getFullYear() - this._birthDate.getFullYear();
    }
    getBirthDate() {
      return this._birthDate;
    }
    fly() { console.log(`${this.name} está voando!`); }
  }
  
  const d1 = new Date();
  d1.setFullYear(2015);
  const b1 = new Bird('Papagaio', d1);
  console.log(b1.age);
  b1.fly();
  
  /*
  Saída (código executado em 2021):
  6
  Papagaio está voando!
  */