import { hello, helloname } from './display.js';
import { sum,difference,qoutient,product } from './compute.js';

hello();

helloname("John Rix");

console.log("The sum is", sum(1,2));
console.log("The difference is", difference(6,2));
console.log("The product is", product(7,2));
console.log("The qoutient is", qoutient(8,2));
