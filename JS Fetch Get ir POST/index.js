async function isgryninuNamus() {
  try {
    const response = await fetch("https://robust-safe-crafter.glitch.me/");
    if (response.ok) {
      const namai = await response.json();
      console.log(namai);

      // Get unique city names
      const uniqueCities = Array.from(
        new Set(namai.map((namas) => namas.city))
      );

      creteButtons(uniqueCities);

      const namaiContainer = document.getElementById("properties-container");
      namaiContainer.innerHTML = "";

      namai.forEach((namas) => {
        const namoVaizdas = document.createElement("img");
        namoVaizdas.src = namas.image;
        namoVaizdas.setAttribute("alt", "namo vaizdas");

        const namoKaina = document.createElement("h1");
        namoKaina.innerText = `${namas.price}€`;

        const namoMiestas = document.createElement("p");
        namoMiestas.innerText = namas.city;

        const namoAprasymas = document.createElement("p");
        namoAprasymas.innerText = namas.description;

        const namoKortele = document.createElement("div");
        namoKortele.setAttribute("class", "namo-kortele");
        namoKortele.append(namoVaizdas, namoKaina, namoMiestas, namoAprasymas);
        namaiContainer.append(namoKortele);
        namaiContainer.className = "flex";
      });
    }
  } catch (error) {
    console.log(error);
  }
}

function creteButtons(cities) {
  const mygtukuConteineris = document.getElementById("filters-container");
  mygtukuConteineris.innerHTML = ""; // Clear existing buttons

  // Create a button for "All Cities"
  const allCitiesButton = document.createElement("button");
  allCitiesButton.innerText = "Visi Miestai";
  allCitiesButton.className = "button button-all-cities";
  allCitiesButton.addEventListener("click", () => filterByCity("All Cities"));
  mygtukuConteineris.append(allCitiesButton);

  cities.forEach((city, index) => {
    // Create city buttons with different class names (e.g., "button-city1", "button-city2", etc.)
    const mygtukai = document.createElement("button");
    mygtukai.innerText = city;
    mygtukai.className = `button button-city${index + 1}`;
    mygtukai.addEventListener("click", () => filterByCity(city));
    mygtukuConteineris.append(mygtukai);
  });
}

// Function to filter properties by city
function filterByCity(city) {
  const namaiContainer = document.getElementById("properties-container");
  namaiContainer.className = "flex";
  const allProperties = namaiContainer.querySelectorAll(".namo-kortele");

  allProperties.forEach((property) => {
    const cityElement = property.querySelector("p");
    if (city === "All Cities" || cityElement.innerText === city) {
      property.style.display = "block";
    } else {
      property.style.display = "none";
    }
  });
}

isgryninuNamus();
