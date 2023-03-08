//class- blueprint for an object

//constructor function

// function Person() {
//   (this.name = "John"), (this.age = 23);
// }

// //create an object
// const user = new Person();

//create a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("John", 20);
const person2 = new Person("Jack", 22);
console.log(person1.name);
console.log(person2.name);

//this

const firstName = "Amuthan";
const lastName = "Pandian";

let userName = {
  firstName: "Harman",
  lastName: "Rai",
  greet: function () {
    return `Say Hi to ${this.firstName} ${this.lastName}`;
  },
};

console.log(userName.greet());
