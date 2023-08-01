// console.log(window.innerHeight);

// document.body.style.backgroundColor = 'red'

// // console.log(document.body.classList);

const h1 = document.getElementById("someId");
console.log(h1);
h1.style.color = "green";

let textContent = h1.textContent;
textContent += " Papildomas tekstas";
h1.textContent = textContent;

console.log(textContent);

const h1Query = document.querySelector("#someId");
console.log(h1Query);

const divsQuery = document.querySelectorAll("div");
console.log(divsQuery);

const divsWithClass = document.getElementsByClassName("pirma");
console.log(divsWithClass);

const divWithName = document.getElementsByClassName("treciasDiv");
console.log(divWithName);

const divsWithClassQuery = document.querySelectorAll("[name= 'treciasDiv' ]");
console.log(divsWithClassQuery);

const h2InDiv = document.querySelector("div > h2");
console.log(h2InDiv);
