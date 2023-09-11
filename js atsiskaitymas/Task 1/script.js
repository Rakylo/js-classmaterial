/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const svorisInput = document.querySelector("#search");
const mygtukas = document.querySelector("#submit-btn");
const atsakymas = document.querySelector("#output");
atsakymas.style.color = "red";
atsakymas.style.margin = "70px";

mygtukas.addEventListener("click", (e) => {
  e.preventDefault();
  atsakymas.innerHTML = "";
  const svoris = parseInt(svorisInput.value);
  //   console.log(typeof svoris);
  const svarai = svoris * 2.2046;
  const gramai = svoris / 0.001;
  const uncijos = svoris * 35.274;

  const svaraiAts = document.createElement("div");
  svaraiAts.textContent = "Svarai: " + svarai;
  const gramuAts = document.createElement("div");
  gramuAts.textContent = "Gramai: " + gramai;
  const uncijuAts = document.createElement("div");
  uncijuAts.textContent = "Uncijos: " + uncijos;

  atsakymas.append(svaraiAts, gramuAts, uncijuAts);
});
