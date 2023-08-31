// document.cookie = "name=Marius; expires=Thu, 01 Jan 2024 00:00:00 GMT";
// console.log(document.cookie);

// console.log(document.cookie.split("-")[1]);

// sessionStorage.setItem(
//   "manoSessionStorage",
//   JSON.stringify({
//     labas: "labas",
//   })
// );
// const x = sessionStorage.getItem("manoSessionStorage");

// const obj = JSON.parse(x);

// console.log(obj);
// sessionStorage.removeItem("manoSessioStorage");

// localStorage.setItem("name", "marius");
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");

// PRATIMAS:

const pienasButton = document.querySelector("#pienas");
const bulkaButton = document.querySelector("#bulka");

const tableBody = document.querySelector("tbody");

pienasButton.addEventListener("click", () => {
  addProductToBag("pienas");
});
bulkaButton.addEventListener("click", () => {
  addProductToBag("bulka");
});

function addProductToBag(product) {
  const currentBag = localStorage.getItem("bag");

  if (currentBag) {
    const bag = JSON.parse(currentBag);
    const index = bag.findIndex((element) => element.name === product);
    if (index === -1) {
      bag.push({
        amount: 1,
        name: product,
      });
      localStorage.setItem("bag", JSON.stringify(bag));
    } else {
      bag[index].amount++;
      localStorage.setItem("bag", JSON.stringify(bag));
    }
  } else {
    localStorage.setItem(
      "bag",
      JSON.stringify([
        {
          amount: 1,
          name: product,
        },
      ])
    );
  }
  displayBag();
}

function displayBag() {
  tableBody.innerHTML = "";
  const bagString = localStorage.getItem("bag");
  if (bagString) {
    const bag = JSON.parse(bagString);
    bag.forEach((element) => {
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdAmount = document.createElement("td");
      tdName.textContent = element.name;
      tdAmount.textContent = element.amount;

      tr.append(tdName, tdAmount);

      tableBody.append(tr);
    });
  }
}
displayBag();
