let ptextContent = document.querySelector("p").textContent;

const p = document.querySelector("p");
const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", clickHandler);

function clickHandler() {
  console.log(p);
  ptextContent = "ate";
  p.textContent = "kazkas kito";
  //   p.textContent = text.slice(0, text.length - 1);
}

const input = document.querySelector("input");

input.addEventListener("keydown", inputHandler);

function inputHandler(e) {
  if (e.key === "Enter") {
    const p2 = document.createElement("p");
    p2.textContent = e.target.value;
    body.appendChild(p2);
  }
}
