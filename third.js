import { add, subtract, multiply } from './code.js';

// function add(...theArgs) {
//   console.log(theArgs);
// }

//////
console.log(add(5, 6));
var myNumbers = [5, 6, 7, 8, 9];

add(myNumbers, 10); //add([5,6,7,8,9])
add(...myNumbers, 10); //add(5,6,7,8,9)

let clone = [50, ...myNumbers];

let merge = [...clone, ...myNumbers, ...myNumbers];
console.log('mynumbers', myNumbers);
console.log('clone', clone);
console.log('merge', merge);

let emp = { name: 'Fred', age: 25, age: 26 };
let cloneEmp = { ...emp };
let olderEmp = { ...emp, age: 27 };
//Where we need

let hist = emp;
emp.age = 28; //bad, mutates the object
emp = { city: 'montreal', ...emp, age: 28 }; //no mutation, creating new object

hist === emp;

console.log(emp);

let person1 = { name: 'John', age: 26 };
let person2 = Object.create(person1);

let array = [1, 2] + [3, 4];
console.log(typeof array);
