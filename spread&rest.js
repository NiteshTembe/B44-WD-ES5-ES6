//spread - spread or expand the array

const arr = ["My", "name", "is", "Sangeetha"];
console.log(arr); //['My', 'name', 'is', 'Sangeetha']
console.log(...arr); //My name is Sangeetha

//copy array

const a1 = ["one", "two"];
const a2 = [...a1, "three", "five"];
console.log(a2);
//["one", "two","three", "five ]
console.log(...a2); //one two three five

//rest operator/paramater - passing spread operator to fun parameter/pass argum as array element

let b = function (...arg) {
  console.log(arg);
};
b(2); //[2]
b(5, 8, 0); //[5, 8, 0]



function add(x, y, z) {
  console.log(x + y + z);
}
const n1 = [1, 5, 8, 9];
add(...n1);//14
