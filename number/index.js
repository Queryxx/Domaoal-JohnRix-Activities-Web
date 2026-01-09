import { isAdult, isMinor, isSenior } from './age.js';
import { isEven, isNegative, isOdd, isPositive, isZero } from "./number.js";
const num1 = -60;
console.log("Number:", num1);
console.log("Minor",isMinor(num1));
console.log("Adult",isAdult(num1));
console.log("Senior",isSenior(num1));

console.log("Neg",isNegative(num1));
console.log("Pos",isPositive(num1));
console.log("Zero",isZero(num1));
console.log("Odd",isOdd(num1));
console.log("Even",isEven(num1));
