// Global constants :

const emailInput = document.querySelector("input[type=email");
const checkboxInput = document.querySelector("input[type=checkbox");
console.log(checkboxInput);

//Functions
function handleSubmit(event) {
  event.preventDefault(); //kad neperkrautu html puslapio
  const checkboxValue = document.getElementById("checked").checked;
  const emailValue = Text(emailInput.value);

  if (checkboxValue) {
    document.querySelector(
      "h1"
    ).textContent = `El. pastas ${emailValue} sekmingai uzregistruotas`;
  } else {
    document.querySelector("h1").textContent = `nesekmingai`;
  }
}

//Main code
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
