function submitHandler(e) {
  e.preventDefault();
  const number1 = document.querySelector("#vienas").value;
  const number2 = document.querySelector("#du").value;
  let number1a = number1 - 100;
  let number2a = number2 - 100;
  if (Math.abs(number1a) < Math.abs(number2a)) {
    alert(`arciau simto yra ${number1} `);
  } else {
    alert(`arciau simto yra ${number2}`);
  }
  //   console.log(number1, number2);
}

// Main code
document.querySelector("#someForm").addEventListener("submit", submitHandler);
