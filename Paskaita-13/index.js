// Task: Practice with forEach:

// a. Write a function printUpperCase that takes an array of strings as input and uses the forEach method to print each string in uppercase.const words = ["hello", "world", "javascript"];

const words = ["hello", "world", "javascript"];

function printUpperCase(arr) {
  // for(let index = 0; index < arr.length; index++) {
  //     console.log(arr[index].toUpperCase());
  // }
  arr.forEach((word, i) => {
    console.log(word.toUpperCase());
    console.log(i);
  });
}
printUpperCase(words);
// b. Create a function calculateSquares that takes an array of numbers as input and uses the forEach method to calculate the square of each number. console log the numbers. const numbers = [2, 4, 6, 8];

const numbers = [2, 4, 6, 8];

function calculateSquares(arr) {
  arr.forEach((number) => {
    console.log(number * number);
  });
}
calculateSquares(numbers);

// Task: Practice with map:

// a. Write a function nameLengths that takes an array of names as input and uses the map method to create a new array containing the lengths of each name. Return the new array. const names = ["Alice", "Bob", "Charlie"];
const names = ["Alice", "Bob", "Charlie"];
function nameLengths(arr) {
  //   const lengths = [];
  //   for (let index = 0; index < arr.length; index++) {
  //     lengths.push(arr[index].length);
  //   }
  //   console.log(lengths);
  const lengths = arr.map((name) => name.length);
  //   ARBA
  //   {
  //     return name.length;
  //   });
  console.log(lengths);
}

nameLengths(names);
// b. Create a function convertToFahrenheit that takes an array of temperatures in Celsius as input and uses the map method to convert them to Fahrenheit. Return the new array with temperatures in Fahrenheit. const celsiusTemperatures = [0, 25, 100];

const celsiusTemperatures = [0, 25, 100];
function convertToFahrenheit(arr) {
  const tempFar = arr.map((temp) => {
    const far = (temp * 9) / 5 + 32;
    return far;
  });
  console.log(tempFar);
}
convertToFahrenheit(celsiusTemperatures);
// Task: Practice with filter:

// a. Implement a function getEvenNumbers that takes an array of numbers as input and uses the filter method to create a new array containing only the even numbers. Return the new array. const numbersArray = [1, 2, 3, 4, 5, 6];

const numbersArray = [1, 2, 3, 4, 5, 6];
function getEvenNumbers(arr) {
  //   const res = [];
  //   for (let i = 0; index < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       res.push(arr[i]);
  //     }
  //   }
  const filtered = arr.filter((num) => num % 2 === 0);

  console.log(filtered);
}

getEvenNumbers(numbersArray);
// b. Write a function longWords that takes an array of strings as input and uses the filter method to create a new array with strings that have a length greater than 5 characters. Return the new array. const wordsArray = ["apple", "banana", "grapefruit", "orange"];

const wordsArray = ["apple", "banana", "grapefruit", "orange"];

function longWords(arr) {}
longWords(wordsArray);
// Task: Practice with find:

// a. Create a function findOlderPerson that takes an array of objects representing people with their ages as input. Use the find method to retrieve the first person who is older than 30. Return the object of the found person. const peopleArray = [

//   { name: "Alice", age: 25 },

//   { name: "Bob", age: 40 },

//   { name: "Charlie", age: 28 }

// ];
const peopleArray = [
  { name: "Alice", age: 25 },

  { name: "Bob", age: 40 },

  { name: "Charlie", age: 28 },
];
function findOlderPerson(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].age > 30) {
  //       console.log(arr[i]);
  //       return;
  //     }
  //   }

  const person = arr.find((per) => per.age > 30);

  console.log(person);
}
findOlderPerson(peopleArray);

// b. Implement a function findFirstLongWord that takes an array of words as input and uses the find method to get the first word with more than four characters. Return the found word.  const wordsArray = ["apple", "banana", "grape", "orange"];

const wordsArray1 = ["apple", "banana", "grape", "orange"];

function findFirstLongWord1(arr) {
  const longWord = arr.find((word) => word.length > 4);
  console.log(longWord);
}
findFirstLongWord1(wordsArray1);

// Task: Practice with some:

// a. Write a function hasNegativeNumber that takes an array of numbers as input and uses the some method to check if there's at least one negative number. Return true if a negative number is found, otherwise false. const numbersArray = [1, -2, 3, 4, -5];

const numbersArray1 = [1, -2, 3, 4, -5];
function hasNegativeNumber(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < 0) {
  //       console.log(true);
  //       return;
  //     }
  //   }
  //   console.log(false);
  const hasNegative = arr.some((num) => num < 0);

  console.log(hasNegative);
}
hasNegativeNumber(numbersArray1);
// b. Create a function hasLongString that takes an array of strings as input and uses the some method to check if any string has more than 10 characters. Return true if such a string is found, otherwise false. const stringsArray = ["apple", "banana", "grapefruit", "orange"];

const stringsArray = ["apple", "banana", "grapefruit", "orange"];

function hasLongString1(arr) {
  const someString = arr.some((string) => string.length >= 10);
  console.log(someString);
}
hasLongString1(stringsArray);

// Task: Practice with every:

// a. Implement a function areAllAdults that takes an array of ages as input and uses the every method to check if all ages are greater than 18. Return true if all ages are adults, otherwise false. const agesArray = [20, 25, 30, 16];

const agesArray = [20, 25, 30, 16];

function areAllAdults(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < 18) {
  //       console.log(false);
  //       return;
  //     }
  //   }
  //   console.log(true);

  const isAllAdults = arr.every((age) => age > 18);

  console.log(isAllAdults);
}
areAllAdults(agesArray);

// b. Write a function allHaveVowels that takes an array of strings as input and uses the every method to check if all strings have at least one vowel. Return true if all strings meet the condition, otherwise false. const wordsArray = ["apple", "banana", "grape", "kiwi"];  const vowels = ["a", "e", "i", "o", "u"];

const findFirstLongWord = (wordsArray2) => {
  return wordsArray2.find((word) => word.length > 4);
};

const wordsArray2 = ["apple", "banana", "grape", "orange"];
const firstLongWord = findFirstLongWord(wordsArray2);
console.log(firstLongWord);
