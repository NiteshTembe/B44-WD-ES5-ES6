const avenger = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "Live more worry less🥳",
};

const {
  name,
  networth,
  power = "💿",
  skill = ["genius", "billionaire", "playboy", "philanthropist"],
} = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "Live more worry less🥳",
};

console.log(networth, power, skill);

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "Live more worry less🥳",
};
console.log(avg);
const avg1 = { ...avg, nation: "US", power: "💿" };
console.log(avg1);

// {
//     name: "Tony Stark",
//     house: "🏠",
//     networth: "💰💰💰💰",
//     power: "💿",
//     phrase: "Live more worry less🥳",
//     nation: "US"
//   };

const avg2 = { nation: "US", power: "💿", ...avg };
console.log(avg2);
// {
// nation: "US",

// name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   power: "🤖",
//   phrase: "Live more worry less🥳",
// }

// shorthand
// ----------

// const age = 10;
// const batch = "B44WD";
// const mark = 90;
// const student = {
//   name: "John",
//   age: age,
//   batch: batch,
// };

// console.log(student);//{name: 'John', age: 10, batch: 'B44WD'}

// object shorthand - key and value name should be same

const age = 10;
const batch = "B44WD";
const mark = 90;

const student = {
  name: "John",
  age,
  batch,
  score: mark,
};

console.log(student);
//John has got 90 and he belongs to B44WD

function printDetails(student) {
  return (
    student.name +
    " has got " +
    student.score +
    " and he belongs to " +
    student.batch
  );
}
console.log(printDetails(student));

function printDetails1(student) {
  const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}
console.log(printDetails1(student));

function printDetails2({ name, score, batch }) {
  //const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}
console.log(printDetails2(student));

//ES6
//template literals - `` + ${} - interpolation => substitute a value

function printDetails3({ name, score, batch }) {
  return `${name} has got ${score} and he belongs to ${batch}`;
}
console.log(printDetails3(student));

//arrow function + template literals + destructuring

const printDetails4 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

console.log(printDetails4(student));
