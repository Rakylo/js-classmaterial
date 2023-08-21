// Global constants :

const yearsInput = document.querySelector("input[type=number");

//Functions
function handleSubmit(event) {
  const bonus1 = 50;
  const bonus2 = 100;
  const bonus3 = 200;
  event.preventDefault(); //kad neperkrautu html puslapio

  const yearsValue = Number(yearsInput.value);
  if (yearsValue < 10) {
    document.querySelector("h1").textContent = `your bonus is ${bonus1} eur`;
  } else if (yearsValue > 10 && yearsValue < 20) {
    document.querySelector("h1").textContent = `your bonus is ${bonus2}eur`;
  } else {
    document.querySelector("h1").textContent = `your bonus is ${bonus3} eur`;
  }
}

//Main code
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
