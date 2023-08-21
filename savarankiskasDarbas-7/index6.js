// Global constants :

const numberInput = document.querySelector("input[type=number");

//Functions
function handleSubmit(event) {
  event.preventDefault(); //kad neperkrautu html puslapio
  let star = "";
  const numberValue = numberInput.value;
  for (let i = 0; i < numberValue; i++) {
    const listItem = document.createElement("div");
    star += `*`;
    listItem.innerText = star;
    someForm.append(listItem);
  }
}

//Main code
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
