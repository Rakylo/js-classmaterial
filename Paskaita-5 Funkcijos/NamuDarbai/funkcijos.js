// //1
// function alertName(name) {
//   alert(name);
// }
// alertName("John");

// // 2

// function randomNumber() {
//   return Math.floor(Math.random() * 5) + 1;
// }

// rezultatas1 = randomNumber();
// console.log(rezultatas1);

// // 3

// function ilgis(name, surname) {
//   return name.length + surname.length;
// }
// console.log(ilgis("Martynas", "Rakauskas"));

// // 4

// function getLetter(number) {
//   const abecele = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   return abecele[number];
// }

// console.log(getLetter(4));

// // 5

// function mathOperation(n1, n2, operator) {
//   if (operator == "sum") {
//     return n1 + n2;
//   } else if (operator == "sub") {
//     atimtis = n1 - n2;
//     return atimtis;
//   } else if (operator == "div") {
//     dalyba = n1 / n2;
//     return dalyba;
//   } else if (operator == "multi") {
//     daugyba = n1 * n2;
//     return daugyba;
//   } else {
//     return "tokio operatoriaus nera";
//   }
// }
// rezultatas = mathOperation(2, 10, "divfasef");
// console.log(rezultatas);

// 6

function randomNumber() {
  rezult = Math.floor(Math.random() * 10 + 1);
  return rezult;
}

function doSquare(number) {
  rezult = Math.pow(number, 2);
  return rezult;
}

//programa
random = randomNumber();
console.log(random);
rezultatas = doSquare(random);
console.log(rezultatas);
