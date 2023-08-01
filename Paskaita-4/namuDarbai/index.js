// while ir do

// let name1 = " Martynas";
// name1 = " Petras";
// let combo = "";
// let i = 0;

// do {
//   combo += name1;

//   console.log("times =", +i, "combo = " + combo);
//   i++;
// } while (i < 3);

// JS MATH

// console.log(Math.cos(0));

// const matematika = Math.floor(Math.random() * 5 + 1);
// console.log(matematika);

// const matematika1 = Math.floor(Math.random() * 8 + 5);
// console.log(matematika1);

// const bilietas = Math.floor(Math.random() * 5 + 1);
// console.log(bilietas);
// if (bilietas === 3) {
//   alert("Laimejai");
// } else {
//   alert("nelaimejai");
// }

// const span1 = document.querySelectorAll("p > span");
// console.log(span1);

let bmw = document.querySelector("ol > li");
let vw = document.querySelector("ol > li:nth-child(2)");

const bmw_group = bmw.textContent;
const vw_group = vw.textContent;
console.log(bmw_group, vw_group);
bmw.textContent = vw_group;
vw.textContent = bmw_group;
