// Global constans

let myCounter = 0;

//  funkcijos

function submitHandler(e) {
  e.preventDefault();
  const userNumber = document.querySelector("#skaicius").value;
  myCounter++;

  if (myNumber == userNumber) {
    alert(`Atspejai is ${myCounter} karto`);
  } else {
    alert("Neatspejai");
  }
}

// main code

let myNumber = Math.floor(Math.random() * 5 + 1);
console.log(myNumber);

document.querySelector("#someForm").addEventListener("submit", submitHandler);
