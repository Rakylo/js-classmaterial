/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */

import { composition } from "./modules/math/composition.js";

import { division } from "./modules/math/division.js";

import { substraction } from "./modules/math/subtraction.js";

import { multiplication } from "./modules/math/multiplication.js";

const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
