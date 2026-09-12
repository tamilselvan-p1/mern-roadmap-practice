//VARIABLES
var a = 5;
var a = 10;
console.log(a);

let b = 20;
b = 22;
// let b=25 can t be re decalared
console.log(b);

const c = 30;
// c=32; cant t be re assigned
//const c =35; can t be re declared
console.log(c);

// Data Types / Type Checking (typeof)
console.log(typeof "Hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof Symbol('id')); // "symbol"
console.log(typeof 10n);          // "bigint"
console.log(typeof function () { }); // "function"

//coection example 
let x= 10 + "" // number to string
let y = 10 + "5"
console.log(x,y);

//TEMPLATE LITERALS
const name = "tamil";
const age1 = 21;
console.log(`I am ${name}, My age is ${age1}`);// uses ``backticks

//multiline string
let ms = `This is multiline string 
of JavaScript`
console.log(ms);

//ternary operator
let age = 20;
let canvote = age >=18 ? "Yes" : "No"; // ternary operator
console.log(canvote);




