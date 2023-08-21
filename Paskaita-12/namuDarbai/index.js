const legalAge = true;
console.log(legalAge);
console.log(typeof legalAge.toString());

const milkPrice = 4;
const milkPriceInt = milkPrice.toFixed();

console.log(milkPriceInt);

// if (milkPrice == milkPriceInt) {
//   alert(`nereikes centuku ${milkPrice.toPrecision(3)} `);
// } else {
//   alert(`reikes centuku ${milkPrice.toPrecision(3)} `);
// }

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();

  const pirmasNumeris = document.querySelector("#pirmasNr").value;
  const antrasNumeris = document.querySelector("#antrasNr").value;
  console.log(pirmasNumeris, antrasNumeris);

  const suma = pirmasNumeris * antrasNumeris;

  const atsakymas = document.createElement("h1");

  atsakymas.textContent = `Moketi ${suma.toFixed(2)} Eur`;

  document.body.append(atsakymas);
});
