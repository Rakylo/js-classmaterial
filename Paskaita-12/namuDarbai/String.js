document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const skaicius = Number(document.getElementById("antras").value);
  const vardas = document.getElementById("vienas").value;
  if (Number.isInteger(skaicius)) {
    const elementas = document.createElement("h1");
    elementas.textContent = vardas.repeat(skaicius);
    document.body.append(elementas);
  } else {
    alert("not integer");
  }

  //   const ilgis = vardas.lenght;

  //   console.log(vardas.length);
  //   alert(vardas.trim().length);
  const vardasPavarde1 = document.getElementById("vienas").value.trim();
  console.log(vardasPavarde1);

  const vardasPavarde = vardas.split(" ");

  const bla = document.createElement("h1");
  bla.textContent = vardasPavarde[0];
  //   document.body.append(bla);
  const bla1 = document.createElement("h1");
  bla1.textContent = vardasPavarde[1];
  document.body.append(bla, bla1);
  const pavarde5 = vardasPavarde1.replace(bla, "").slice(1);
  console.log(pavarde5);
  //   console.log(vardasPavarde);
});
