// for (let index = 1; index <= 100; index++) {
//   if (index % 3 === 0 && index % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (index % 3 === 0){
//    console.log("Fizz");
//   } else if (index % 5===0){
//     console.log("buzz");
//   } else {
//     console.log(index);
//   }

// const str = "labas";
// let reversedstring = "";
// console.log(str.length);

// for (let index = str.length - 1; index > 0; index--) {
//   console.log(str[index]);
// }

// console.log(reversedString);
const num = 5;
for (let index = 1; index <= 10; index++) {
  console.log(`${num} x ${index} = ${num * index}`);
}

const word = "labas";
const vowels = ["a", "e", "i", "o", "u"];

let totalVowels = 0;

for (let index = 0; index < word.length; index++) {
  console.log(word[index]);
  if (vowels.includes(word[index])) {
    totalVowels++;
  }
}
console.log(totalVowels);
