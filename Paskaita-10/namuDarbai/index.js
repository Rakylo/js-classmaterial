document.querySelector("#mygtukas").addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const vardas = document.querySelector("#vardas").value;
  const pavarde = document.querySelector("#pavarde").value;

  console.log(vardas, pavarde);

  const person = {
    name: vardas,
    surname: pavarde,
  };
  console.log(person);
}

document.querySelector("#mygtukas2").addEventListener("click", handleSubmit1);

function handleSubmit1(e) {
  e.preventDefault();
  const vardas = document.querySelector("#name2").value;
  const amzius = document.querySelector("#age").value;
  let legalu = "";
  if (amzius >= 18) {
    legalu = "true";
  } else {
    legalu = "false";
  }
  const person1 = {
    name: vardas,
    age: legalu,
  };
  console.log(person1);
}
