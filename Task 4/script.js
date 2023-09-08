/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į countries.json failą (fetch("./countries.json"))
ir iš atvaizduos visas šalis ir jų eksportus. 
Kiekviena šalis turės savo atvaizdavimo "kortelę", kurioje bus 
nurodoma šalis ir jos eksportai.


Pastaba: Informacija apie šalis turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const output = document.querySelector("#output");

fetch("./countries.json")
  .then((response) => response.json())
  .then((data) => {
    const duomenys = data;
    console.log(data);
    duomenys.forEach((data) => {
      const salis = document.createElement("p");
      salis.style.fontWeight = "bold";
      salis.textContent = "Country: " + data.country;

      const brr = document.createElement("p");
      brr.textContent = "===";

      const exportai = document.createElement("p");
      exportai.style.color = "red";
      exportai.textContent = "Exports: " + data.exports;

      output.append(salis, exportai, brr);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
