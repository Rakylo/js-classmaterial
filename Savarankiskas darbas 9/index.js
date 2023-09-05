// pasiimti duomenis iš DB
// atvaizuoti checkbox

// atvaizuojam lentelės headerį
// atvaizuojam paprastus duomenis
// jei checked (VIP)
//      nutrinam lentele duomenis
//      atvaizuojam lentels headerį
//      atvaizuojam vip duomenis
// jei unchecked (NOTVIP)
//      nutrinam lentele
//      atvaizuojam lentelės headerį
//      atvaizuojam visus duomenis

const container = document.getElementById("container");
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
const label = document.createElement("label");
label.textContent = "Display VIP only";
container.append(checkbox);
container.append(label);

getData();

async function getData() {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    //console.log(response);
    if (response.ok) {
      const duomenys = await response.json();
      console.log(duomenys);

      lentelesGalva();
      displayDuomenys(duomenys);

      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          const tab = document.getElementById("galva");
          tab.remove();
          lentelesGalva();
          displayDuomenysVIP(duomenys);
        } else {
          const tab = document.getElementById("galva");
          tab.remove();
          lentelesGalva();
          displayDuomenys(duomenys);
        }
      });
    } else {
      console.log("beda bedele");
    }
  } catch (error) {
    console.log(error);
  }
}

function lentelesGalva() {
  const table = document.createElement("table");
  table.setAttribute("id", "galva");
  const tr = document.createElement("tr");
  const th1 = document.createElement("th");
  th1.textContent = "Id";
  const image = document.createElement("th");
  image.textContent = "Image";
  const th2 = document.createElement("th");
  th2.textContent = "Name";
  const th2Sur = document.createElement("th");
  th2Sur.textContent = "Surname";
  const th3 = document.createElement("th");
  th3.textContent = "City";
  const th4 = document.createElement("th");
  th4.textContent = "Fav-color";
  const th5 = document.createElement("th");
  th5.textContent = "VIP";
  container.append(table);
  table.append(tr);
  tr.append(th1, image, th2, th2Sur, th3, th4, th5);
}

function displayDuomenysVIP(duomenys) {
  //const galva = document.getElementById("galva");
  console.log(checkbox.checked);
  duomenys.forEach((zmones) => {
    if (zmones.vip) {
      const tr2 = document.createElement("tr");
      const thInfo1 = document.createElement("td");
      thInfo1.textContent = zmones.id;
      galva.append(tr2);
      tr2.append(thInfo1);

      const imageTd = document.createElement("img");
      imageTd.src = zmones.image;
      imageTd.setAttribute("alt", "UserPicture");
      const images1 = document.createElement("td");
      images1.append(imageTd);
      tr2.append(images1);

      const thInfo2 = document.createElement("td");
      const vardasPavarde = zmones.name.split(" ");
      thInfo2.textContent = vardasPavarde[0];
      const pavarde = document.createElement("td");
      pavarde.textContent = vardasPavarde[1];
      const thInfo3 = document.createElement("td");
      thInfo3.textContent = zmones.city;
      const thInfo4 = document.createElement("td");
      thInfo4.textContent = zmones.fav_color;
      const thInfo5 = document.createElement("td");
      if (zmones.vip) {
        thInfo5.textContent = "Yes";
      } else {
        thInfo5.textContent = "No";
      }
      tr2.append(thInfo2, pavarde, thInfo3, thInfo4, thInfo5);
    }
  });
}
function displayDuomenys(duomenys) {
  //const galva = document.getElementById("galva");
  console.log(checkbox.checked);
  duomenys.forEach((zmones) => {
    const tr2 = document.createElement("tr");
    const thInfo1 = document.createElement("td");
    thInfo1.textContent = zmones.id;
    galva.append(tr2);
    tr2.append(thInfo1);

    const imageTd = document.createElement("img");
    imageTd.src = zmones.image;
    imageTd.setAttribute("alt", "UserPicture");
    const images1 = document.createElement("td");
    images1.append(imageTd);
    tr2.append(images1);

    const thInfo2 = document.createElement("td");
    const vardasPavarde = zmones.name.split(" ");
    thInfo2.textContent = vardasPavarde[0];
    const pavarde = document.createElement("td");
    pavarde.textContent = vardasPavarde[1];
    const thInfo3 = document.createElement("td");
    thInfo3.textContent = zmones.city;
    const thInfo4 = document.createElement("td");
    thInfo4.textContent = zmones.fav_color;
    const thInfo5 = document.createElement("td");
    if (zmones.vip) {
      thInfo5.textContent = "Yes";
    } else {
      thInfo5.textContent = "No";
    }
    tr2.append(thInfo2, pavarde, thInfo3, thInfo4, thInfo5);
  });
}
