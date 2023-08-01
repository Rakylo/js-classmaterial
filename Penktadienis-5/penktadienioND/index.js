// Filter Even Numbers Create an array of numbers and write a JavaScript function to filter out and return only the even numbers using a loop and an if statement. Kad prideti nauja elements prie array rašom arr.push(elementas)

// Sum of Array Write a function that takes an array of numbers as input and returns the sum of all the numbers using a loop

// Array Reversal Write a function that takes an array as input and returns a new array with its elements reversed using a loop. Kad prideti nauja elements prie array rašom arr.push(elementas)

// Array Uniqueness Write a function that takes an array as input and returns a new array with duplicate elements removed using a loop. naudojam arr.inc

// 1
// const numbers = [7, 10, 15, 8, 13, 18, 6, 100, 51, 52, 63, 64, 7];
// let count = numbers.length;
// const evens = numbers.filter((num) => num % 2 === 0);
// console.log(evens);
// for (let i = 0; i < count; i++) {
//   let num = numbers[i];
//   if (num % 2 == 0) {
//     console.log(num);
//   } else {
//     console.log("not even");
//   }
// }
// 2
// let suma = 0;
// for (let i = 0; i < count; i++) {
//   let num = numbers[i];
//   suma = suma + num;
// }
// console.log(suma);

// const reverse = [];

// for (let i = count; i > 0; i--) {
//   let num = numbers[i];
//   reverse.push(num);
// }
// console.log(reverse);
// let numbers1 = [];
// let num1 = 0;
// for (let i = 0; i < count; i++) {
//   let num = numbers[i];
//   delete numbers[i];
//   num1 = numbers.includes(num);
//   if (num1 == true) {
//     console.log("kartojasi");
//     s;
//     numbers.push(num);
//   } else {
//     numbers1.push(num);
//     numbers.push(num);
//   }
// }
// console.log(numbers1);

// 4

const masyvas = [10, 54, 76, 42, 10, 7, 7, 23, 23];
const masyvas1 = [];
const ilgis = masyvas.length;

// console.log(masyvas[2]);

for (let i = 0; i < ilgis; i++) {
  rezultatas = masyvas.includes(masyvas[i], i + 1);
  if (rezultatas == false) {
    masyvas1.push(masyvas[i]);
  }
}
console.log(masyvas1);

for (let i = 0; i < ilgis; i++) {
  if (masyvas.includes(masyvas[i], i + 1) == false) {
    masyvas1.push(masyvas[i]);
  }
}
console.log(masyvas1);
