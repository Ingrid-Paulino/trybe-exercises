//ex1
let n = 5;
let symbol = '*';
let inputLine= '';

for(let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};


//ex2
let size = 5;
let symbol = '*';
let inputLine = '';

for(let indexLine = 0; indexLine <= size; indexLine += 1) {
  console.log(inputLine)
  inputLine = inputLine  + symbol;
}