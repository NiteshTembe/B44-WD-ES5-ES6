//scope - lifetime of a variable
//block - {}, let, const - block scope

{
  let y1 = 10;
  var y2 = 20;
}
//console.log(y1);
//Uncaught ReferenceError: y1 is not defined

console.log(y2); //20

//not defined(error) vs undefined(value)

//can a block hold  a var or will it leak outside?

console.log(a); //undefined
//1000 lines
var a = 50;
console.log(a); //50

//JIT - just in time compilation
// 1. compilation Phase
// 2. Execution Phase
//JS and context

//Example 1
// 1. compilation phase
console.log(a); //skip
var a = 50; //JS -> Do you know a? No | What is value? -> context -> undefined
console.log(a); //skip

// 2. Execution Phase
console.log(a); //JS -> Do you know a? yes | What is value? -> context -> undefined
var a = 50; //JS -> Do you know a? yes | What is value? -> context ->note -> a = 50
console.log(a); //JS -> Do you know a? yes | What is value? -> context => 50

// //Example 2
// // 1. compilation phase
// console.log(a1); //skip
// let a1 = 50; //JS -> Do you know a1? No | What is value? -> context ->dont initialize
// console.log(a1); //skip

// // 2. Execution Phase
// console.log(a1); //JS -> Do you know a1? Yes | What is value? -> context ->Error
// let a1 = 50;
// console.log(a1);

//shadowing
var price = 1000; //Pant

function getPrice() {
  console.log("The old price is", price); //1000
  price = 500; //MSD
  console.log("The new price is", price); //1000
}

getPrice();

// The old price is undefined
// The new price is 500

// The old price is 1000
// The new price is 1000
