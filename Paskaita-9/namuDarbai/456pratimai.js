// 4pratimas

const input = document.querySelector("#spalva");
input.addEventListener("input", changeColor);

function changeColor() {
  const raudona = "red";
  const zalia = "green";

  if (input.value.length <= 3) {
    document.body.style.backgroundColor = zalia;
  } else {
    document.body.style.backgroundColor = raudona;
  }
}

// 5pratimas

const mygtukoSpalvos = ["red", "green", "blue", "yellow"];

const mygtukas = document
  .querySelector("#pushMe")
  .addEventListener("click", (event) => {
    const beleka = Math.floor(Math.random() * 4); // Generate random index between 0 and 3
    event.target.style.backgroundColor = mygtukoSpalvos[beleka];
  });

//   6pratimas
