// Global constants :

const numberInput = document.querySelector("input[type=number");

//Functions
function handleSubmit(event) {
  event.preventDefault(); //kad neperkrautu html puslapio
  let star = "";
  const numberValue = numberInput.value;

  for (let i = 0; i < numberValue; i++) {
    star += "L";
  }
  const listItem1 = document.createElement("div");
  listItem1.innerText = star;
  someForm.append(listItem1);

  for (let i = 0; i < numberValue - 1; i++) {
    const listItem = document.createElement("div");
    star = `L`;
    listItem.innerText = star;
    someForm.append(listItem);
  }
  for (let j = 0; j < numberValue - 1; j++) {
    star += "L";
  }
  const listItem = document.createElement("div");
  listItem.innerText = star;
  someForm.append(listItem);
}

//Main code
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
