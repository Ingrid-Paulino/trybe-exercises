// Extraia as informações de name e birthplace do objeto para montar uma frase!
//exemplo 1
// modo 1
const assert = require('assert');

const person = {
  name: 'Milton Nascimento',
  birthplace: 'Rio de Janeiro',
  city: 'Belo Horizonte',
  albuns: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
};

const phrase = `O cantor ${person.name} nasceu no ${person.birthplace} e mora em ${person.city}. Ele possui ${person.albuns.length} albuns.`;

console.log(phrase);

assert.strictEqual(
  'O cantor Milton Nascimento nasceu no Rio de Janeiro e mora em Belo Horizonte. Ele possui 7 albuns.',
  phrase);


//-------------------------------------------
// modo 2
  const person = {
    name: 'Milton Nascimento',
    birthplace: 'Rio de Janeiro',
    city: 'Belo Horizonte',
    albuns: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
  };
  
  const name = person.name;
  const place = person.birthplace;
  const city = person.city;
  const albuns = person.albuns.length;

  const phrase = `O cantor ${name} nasceu no ${place} e mora em ${city}. Ele possui ${albuns} albuns.`;
  
  console.log(phrase);



// -----------------------------------

// modo 3
const assert = require('assert');

const person = {
  name: 'Milton Nascimento',
  birthplace: 'Rio de Janeiro',
  city: 'Belo Horizonte',
  albuns: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
};

const {name, birthplace, city, albuns} = person

const phrase = `O cantor ${name} nasceu no ${birthplace} e mora em ${city}. Ele possui ${albuns.length} albuns.`;

console.log(phrase);

assert.strictEqual(
  'O cantor Milton Nascimento nasceu no Rio de Janeiro e mora em Belo Horizonte. Ele possui 7 albuns.',
  phrase);


// -------------------

// modo 4 -- melhor forma
const assert = require('assert');
const { constants } = require('node:crypto');

const person = {
  name: 'Milton Nascimento',
  birthplace: 'Rio de Janeiro',
  city: 'Belo Horizonte',
  albuns: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
};

const {name, birthplace: place, city, albuns} = person

const phrase = `O cantor ${name} nasceu no ${place} e mora em ${city}. Ele possui ${albuns.length} albuns.`;

console.log(phrase);

assert.strictEqual(
  'O cantor Milton Nascimento nasceu no Rio de Janeiro e mora em Belo Horizonte. Ele possui 7 albuns.',
  phrase);



  // exemplo 2
  // Faça uma função que receba um objeto representando um animal e retorne sua massa

const assert = require('assert');

const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

const animalDescription = (animal) => {
  return `${animal.commonName} (${animal.name}) weighs around ${animal.weightRange.min}-${animal.weightRange.max} ${animal.weightRange.measurementUnit}`;
}
console.log(animalDescription(lion));


assert.strictEqual(
  animalDescription(lion),
  'Lion (Panthera leo) weighs around 186.55-225 kg'
);
assert.strictEqual(
  animalDescription(blueWhale),
  'Blue whale (Balaenoptera musculus) weighs around 45-173 t'
);
// assert.strictEqual(
//   animalDescription(polarBear),
//   'Polar Bear (Ursus maritimus) weighs around 350-700 kg'
// );





const assert = require('assert');

const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

const animalDescription = ({name, commonName, weightRange}) => {

  return `${weightRange.commonName} (${weightRange.name}) weighs around ${weightRange.min}-${weightRange.max} ${weightRange.measurementUnit}`;
}
console.log(animalDescription(lion));


assert.strictEqual(
  animalDescription(lion),
  'Lion (Panthera leo) weighs around 186.55-225 kg'
);
assert.strictEqual(
  animalDescription(blueWhale),
  'Blue whale (Balaenoptera musculus) weighs around 45-173 t'
);
// assert.strictEqual(
//   animalDescription(polarBear),
//   'Polar Bear (Ursus maritimus) weighs around 350-700 kg'
// );


//----------------------------

const assert = require('assert');

const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

const animalDescription = ({name, commonName, weightRange}) => {
  const {min, max, measurementUnit} = weightRange;
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
}
// console.log(animalDescription(lion));


assert.strictEqual(
  animalDescription(lion),
  'Lion (Panthera leo) weighs around 186.55-225 kg'
);
assert.strictEqual(
  animalDescription(blueWhale),
  'Blue whale (Balaenoptera musculus) weighs around 45-173 t'
);
// assert.strictEqual(
//   animalDescription(polarBear),
//   'Polar Bear (Ursus maritimus) weighs around 350-700 kg'
// );


//---------------------------------- fazer as midanças

const assert = require('assert');

const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

const animalDescription = ({name, commonName, weightRange}) => {
  const {min, max, measurementUnit = 'kg'} = weightRange;
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`;
}
// console.log(animalDescription(lion));


assert.strictEqual(
  animalDescription(lion),
  'Lion (Panthera leo) weighs around 186.55-225 kg'
);
assert.strictEqual(
  animalDescription(blueWhale),
  'Blue whale (Balaenoptera musculus) weighs around 45-173 t'
);

assert.strictEqual(
  animalDescription(polarBear),
  'Polar Bear (Ursus maritimus) weighs around 350-700 kg'
);

  
