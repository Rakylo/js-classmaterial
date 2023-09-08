/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const mygtukas = document.querySelector("#btn__element");
let clickai = 1; // Initialize the click count

mygtukas.addEventListener("click", (e) => {
  e.preventDefault();

  clickai++; // Increment the click count
  const clickaiStr = clickai.toString();
  document.querySelector("#btn__state").textContent = clickaiStr;
});
