/* ------------------------------ TASK 9 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funcijos
-------------------------------------------------------------------------------------------- */

import { composition } from "./modules/math/composition.js";

import { division } from "./modules/math/division.js";

import { substraction } from "./modules/math/subtraction.js";

import { multiplication } from "./modules/math/multiplication.js";

let a = composition(1, 4);
let b = division(4, 2);
let c = substraction(3, 2);
let d = multiplication(5, 2);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
