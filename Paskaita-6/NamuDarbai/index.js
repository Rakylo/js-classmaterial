//Global constants
const nameInput = document.querySelector("input[type=text]");
const ageInput = document.querySelector("input[type=number");
//const bigText = document.querySelector("h1");
//const midText = document.querySelector("h2");

//Functions
function handleSubmit(event) {
  event.preventDefault(); //kad neperkrautu html puslapio
  const ageValue = Number(ageInput.value);
  if (ageValue < 16) {
    document.querySelector("h2").textContent = `jusu bilieto kaina 3e`;
  } else if (ageValue > 16 && ageValue < 60) {
    document.querySelector("h2").textContent = `jusu kaina 6e`;
  } else {
    document.querySelector("h2").textContent = "jusu kaina 2e";
  }

  // document.querySelector("h1").textContent = `Tavo amzius yra ${ageValue}`;
}

//Main code
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
