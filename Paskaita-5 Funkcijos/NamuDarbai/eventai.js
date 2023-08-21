// document.querySelector("button").addEventListener("click", () => {
//   document.querySelector("p").innerText = "textas paspaudus mygtuka";
// });

// let counter = document.querySelector("h1").textContent;

// document.querySelector("button").addEventListener("click", () => {
//   counter++;
//   document.querySelector("h1").innerText = counter;
// });

// document.querySelector("p").addEventListener("click", () => {
//   alert("negalima copy");
// });

document.querySelector("button").addEventListener("click", () => {
  randomSkaicius = Math.floor(Math.random() * 1000) + 1;
  document.querySelector("h1").innerText = randomSkaicius;
});
