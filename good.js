import { printDetails4 as provideInfo } from "./sample.js"; //named import

const student = {
  name: "John",
  age: 20,
  batch: "B44WD",
  score: 90,
};

console.log(provideInfo(student));

// console.log(double(10));
// console.log(Msg);

//default import

// import Msg from "./sample.js";
// import printDetails4 from "./sample.js";
// const student = {
//   name: "John",
//   age: 20,
//   batch: "B44WD",
//   score: 90,
// };

// //console.log(Msg);
// console.log(printDetails4(student));
