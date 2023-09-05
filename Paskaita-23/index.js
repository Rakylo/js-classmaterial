const container = document.querySelector(".container");

async function getData() {
  try {
    const response = await fetch("https://olive-bead-glazer.glitch.me");
    if (response.ok) {
      const data1 = await response.json();
      display(data1); // Call the display function with the fetched data
      console.log(response);
      console.log(data1);
    } else {
      alert("Something wrong");
      console.log("something wrong");
    }
  } catch (error) {
    console.error(error);
  }
}
getData();

function display(duomenys) {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const thBrand = document.createElement("th");
  thBrand.textContent = "Brand";
  const thModel = document.createElement("th");
  thModel.textContent = "Model";

  container.append(table);
  table.append(tr);
  tr.append(thBrand, thModel);

  duomenys.forEach((car) => {
    const tr = document.createElement("tr");
    const tdBrand = document.createElement("td");
    tdBrand.textContent = car.brand;
    const tdModel = document.createElement("td");
    tdModel.textContent = car.model;

    tr.append(tdBrand, tdModel);
    table.append(tr); //
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const brandInput = document.getElementById("brand");
  const modelInput = document.getElementById("model");
  const addButton = document.querySelector("button");

  //   const masyvas = { brand: "BMW", model: i5 };

  addButton.addEventListener("click", async () => {
    const brand = brandInput.value;
    const model = modelInput.value;

    // console.log(newCar);

    try {
      const response = await fetch("https://olive-bead-glazer.glitch.me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand,
          model,
        }),
      });

      if (response.ok) {
        console.log("Car data added successfully.");
        alert("duomenys prideti gerai");
        // duomenys.push(newCar);
        // display(duomenys);
        getData();
      } else {
        console.log("Failed to add car data.");
      }
    } catch (error) {
      console.log("network error occurred:", error);
      alert("nepaejo");
    }
  });
});
