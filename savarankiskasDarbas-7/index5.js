// Global constants :

const nameInput = document.querySelector("input[type=text");
const numberInput = document.querySelector("input[type=number");

//Functions
function handleSubmit(event) {
  event.preventDefault(); //kad neperkrautu html puslapio
  const nameValue = nameInput.value;
  const numberValue = numberInput.value;
  //   console.log(nameValue, numberValue);
  const list = document.getElementById("list");
  for (let i = 0; i < numberValue; i++) {
    const listItem = document.createElement("li");
    listItem.innerText = nameValue;
    list.append(listItem);
  }
}

//Main code
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
