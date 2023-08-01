const table = console.log(document.querySelector("#age-table"));
console.log(table);

const firstTd = document.querySelector("#age");
console.log(firstTd);

const labels = document.querySelectorAll("form > label");
console.log(labels);

const firstInput = document.querySelector("form > input");
console.log(firstInput);

const lastInput = document.querySelector("form > input:last-child");
console.log(lastInput);

console.log(lastInput.value);

const obj = {
  name: "Marius",
  lastName: "wef",
  age: 100,
  parents: ["PirmasTevas", "PirmaMama"],
  car: {
    year: 2000,
    make: "Audi",
    sedynes: {
      pirmaSedyne: "yra",
      antraSedyne: "nera",
    },
  },
};
console.log(obj.parents[0]);

console.log(obj.car.sedynes.pirmaSedyne);
obj.car.sedynes.antraSedyne = "Atsirado";
console.log(obj.car.sedynes.antraSedyne);

const number = Math.sqrt(49);
console.log(number);

// const arr = [1, 2, 3];

// arr[2]= 10;

// console.log(arr);

// console.log(obj.lastName);

// obj.lastName = "gfer0000f";

// console.log(obj.lastName);
// console.log(obj);

// obj.address = "adresas";
// delete obj.name;
// delete obj.age;
// console.log(obj.address);

// console.log(obj);

const h1
h1.textContent = "OOOOOOOO";
