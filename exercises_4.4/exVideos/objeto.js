let player = {
    name: 'Marta',
    lastName: 'Silva', 
    age: 34,
    medals: {
        golden: 2,
        silver: 3 
    }
}

console.log(`A ${player.name} ${player.lastName} tem ${player.age} anos de idade`)

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018] //acrescentei mais uma chave

console.log(player);

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por 6 vezes`)

console.log(player.medals);

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);





// //FOR/IN

let pizzas = {
    sabor: 'Palmito',
    preco: 39.90,
//     bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(key);
};

for (let key in pizzas) {
    console.log(pizzas);
};

for (let key in pizzas) {
    console.log(pizzas[key].preco);
}; // forma 1 de printar

for (let key in pizzas) {
    console.log(pizzas['bordaCatupiry']);
}; // forma 2 de printar

for (let key in pizzas) {
    console.log(pizzas[key]);
} // mostra cada propriedade com o seu valor

for (let key in pizzas) {
    console.log(key, pizzas[key])
};


let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces) {
    console.log(key)
}; // mostra a posição de cada valor

for (let key in pizzasDoces) {
    console.log(pizzasDoces)
}; // mostra tres vezes cada valor

for (let key in pizzasDoces) {
    console.log(pizzasDoces[key]) // mostra so os valores
};

for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key])
}; // me mostra a posição junto com o valor


// //-----------------------

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};

for(let key in names) {
    console.log(`Olá ${key, names[key]}`);
}

//-------------------------


let car = {
model: 'A3 Sedan',
manufacturer: 'Audi',
year: 2020
};

for(let _key in car) {
console.log(_key, car[_key]);
};

//---------------------------------------
//Parte I - Objetos e For/In

let info = {
'personagem': 'Margarida',
origem: 'Pato Donald',
nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-Vinda, ${info.personagem}`)

info.recorrente = 'Sim'

console.log(info)

for (let key in info) {
    console.log(key)
}

console.log('-----------------------')

for (let key in info) {
    console.log(info[key]);
}



let info2 = {
    personagem: 'Tio Patinhas',
    origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178'" ,
    nota: 'O último MacPatinhas',
    ecorrente: 'sim',
};


function dadosInfo(info, info2) {
for(let key in info) {
    console.log(info[key], 'e' , info2[key])  
    } 
}
console.log(dadosInfo(info, info2))




