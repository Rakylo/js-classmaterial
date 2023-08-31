const mygtukas = document.querySelector("#submit");

mygtukas.addEventListener("click", () => {
  const input = document.querySelector("#fullName").value;
  const nameArray = input.split(" ");
  const name = nameArray[0];
  const surName = nameArray[1];
  //   console.log(name, surName);
  let obj = {
    name: name,
    surname: surName,
  };
  const array = [];
  array.push(obj);
  //   console.log(array);
  localStorage.setItem("xmiau", JSON.stringify(array));
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Vardas";
  const thh = document.createElement("th");
  thh.textContent = "Pavarde";
  const ls = localStorage.getItem("xmiau");
  const ls1 = JSON.parse(ls);
  const trr = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = ls1[0].name;
  const newRow = document.createElement("th");
  newRow.textContent = ls1[0].surname;
  console.log(ls1[0].name);
  console.log(ls1[0].surname);

  document.body.append(table, tr, th, thh, trr, th1, newRow);
});
