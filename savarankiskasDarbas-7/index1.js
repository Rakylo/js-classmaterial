// Global constants :

const yearsInput = document.querySelector("input[type=number");
const nonleap = 28;
const leap = 29;
const days1 = 31 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31;

//Functions
function handleSubmit(event) {
  event.preventDefault(); //kad neperkrautu html puslapio

  const yearsValue = Number(yearsInput.value);
  if (yearsValue % 4 == 0) {
    document.querySelector("h1").textContent = `The year ${yearsValue} has ${
      days1 + leap
    } `;
  } else {
    document.querySelector("h1").textContent = `The year ${yearsValue} has ${
      days1 + nonleap
    } `;
  }
}

//Main code
document.querySelector("#someForm").addEventListener("submit", handleSubmit);
