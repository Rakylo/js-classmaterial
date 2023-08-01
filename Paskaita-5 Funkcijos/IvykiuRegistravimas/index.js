const par = document.querySelector("p");

par.addEventListener("click", () => {
  console.log("Paspaudet ant paragrafo");
});

const input = document.querySelector("#inputField");

input.addEventListener("input", logSomething);

function logSomething(e) {
  input.removeEventListener("input", logSomething);
  console.log(e.target.value);
  //   console.log(e);
}

function sayHello() {
  console.log("Hello");
}
