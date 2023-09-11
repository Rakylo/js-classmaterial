/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const output = document.querySelector("#output");

fetch("./cars.json")
  .then((response) => response.json())
  .then((data) => {
    const duomenys = data;
    console.log(data);
    duomenys.forEach((data) => {
      const salis = document.createElement("p");
      salis.style.fontWeight = "bold";
      salis.textContent = "Brand: " + data.brand;

      const brr = document.createElement("p");
      brr.textContent = "===";

      const exportai = document.createElement("p");
      exportai.style.color = "red";
      exportai.textContent = "Models: " + data.models;

      output.append(salis, exportai, brr);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
