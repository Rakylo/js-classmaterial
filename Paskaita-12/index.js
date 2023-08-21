// Primityvus duomenu tipai:

const x = 3.65;

x.toString();

console.log(typeof x.toString());
console.log(x.toFixed(100));
console.log(x.toExponential(3));
console.log(x.toPrecision(6));
const xString = "3.78";

console.log(Number.parseFloat(xString));
console.log(Number.parseInt(xString));
console.log(Number.parseInt("asd"));
console.log(Number.isNaN(NaN));
console.log(typeof +"3.09");

let catsName = "Marekas Blazevic Lietuvos Rytas";
console.log(catsName.includes("uka"));
console.log(catsName.endsWith("s"));
console.log(catsName.length);
console.log(catsName.indexOf("x"));
console.log(catsName.slice(1, 4));
console.log(catsName.split(" "));
console.log(catsName.replace("Rytas", "Neptunas"));

console.log(catsName);

const isTrue = true;

console.log(typeof isTrue.toString());

const person = {
  name: "Andrius",
  age: 30,
};

const person1 = Object.freeze({
  name: "tadas",
  age: 32,
  kazkasViduj: {
    kaskas: 30,
  },
});

person1.age = 20;
person1.lastName = "safdasfasg";
person1.kazkasViduj = 60;
person1.kazkasViduj.kazkasNaujo = 100;

console.log(person1);

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

const arr = [
  ["name", "vardas"],
  ["hasCar", true],
];

console.log(Object.fromEntries(arr));
