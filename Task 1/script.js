// Parašykite JavaScript kodą, kuris leistų vartotojui įvesti temperatūrą laipsniais Celsijaus ir
// matyti jos konversiją į:

//     Farenheitus (°F) | Formulė: °F = (°C * 9/5) + 32
//     Kelvinus (K) | Formulė: K = °C + 273.15

// Pastaba: Rezultatai turi būti matomi formoje su įvesties lauku ir mygtuku,
// ir rezultatai turi būti rodomi viduje <div id="output"></div> elemente.
// Užtikrinkite, kad naudotojo sąsaja turėtų bent minimalų stilių.

const temperaturaInput = document.querySelector("#search");
const mygtukas = document.querySelector("#submit-btn");
const atsakymas = document.querySelector("#output");

mygtukas.addEventListener("click", (e) => {
  e.preventDefault();
  atsakymas.innerHTML = "";
  const temperatura = parseInt(temperaturaInput.value);
  console.log(typeof temperatura);
  const farenheitai = (temperatura * 9) / 5 + 32;
  const kelvinai = temperatura + 273.15;

  const faren = document.createElement("div");
  faren.textContent = "Farenheitus: " + farenheitai;
  const kelvinas = document.createElement("div");
  kelvinas.textContent = "Kelvinus: " + kelvinai;

  atsakymas.append(faren, kelvinas);
});
