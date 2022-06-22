//This programs is a simple calculator that can perform basic
//arithmetic functions such as addition, subtraction
//multiplication and division


//declare the variables

let addition = 0;
let subtraction = 0;
let division = 1;
let multiplication = 1;

//get input from the user
let number1 = parseFloat(prompt("Enter first number"));
let number2 = parseFloat(prompt("Enter second number"));

//the computation process
addition = number1 + number2;
subtraction= number1 - number2;
division = number1/number2;
multiplication = number1*number2;

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);
