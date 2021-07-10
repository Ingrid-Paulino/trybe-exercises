// Arrey das questoes do 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//ex1:
console.log(numbers)

//ex2: 
let total = 0;
for(let i = 0; i < numbers.length; i += 1 ) {
    total += numbers[i];
}
console.log(total);

//ex3:
let total2 = 0;
for(let i = 0; i < numbers.length; i++) {
    total2 = total2 + numbers[i]
}
let res = total2/10;
console.log(res);

//ex4:
if(res > 20) {
    console.log("Valor maior que 20")
}else  {
    console.log("Valor menor ou igual a 20")
}
 
//ex5:





//ex6:
for(let i = 0; i < numbers.length; i++) {
    if(i ) {

    }
}

//ex7:



//ex8:
for(let i = 1; i <= 25; i++){
    console.log(i);
}

//ex9:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let num of numbers) {
    console.log(num/2)
} 