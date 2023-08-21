// Global constants :

const celsiusInput = document.querySelector("input[type=number");

//Functions
function handleSubmit(event) {
  event.preventDefault(); //kad neperkrautu html puslapio

  const celsiusValue = Number(celsiusInput.value);
  const farenheitValue = (celsiusValue * 9) / 5 + 32;

  document.querySelector(
    "h1"
  ).textContent = `In farenheith that is   ${farenheitValue}`;
}

//Main code
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
