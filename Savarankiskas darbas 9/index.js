// 1. atvaizuoti checkbox su vardu VIP ir pasetinti jį unchecked
// 2. atvaizuojam lentelė headerį
// 3. pasiimti duomenis iš DB
// 4. atvaizuojam visus duomenis
// 5. laukiam clicko check
// 6. nutrinam lentelės duomenis bet be headerio
// 7. atvaizduojam VIP duomenis
// 8. laukiam click check
// 8. nutrinam lentelės duomenis be headerio
//atvaizuokjam visus.

const container = document.querySelector(".container");
//1
let check = document.createElement("input");
check.setAttribute("type", "checkbox");
check.setAttribute("id", "isVipCheckbox");
container.append(check);
//console.log(check.value);

//lentelesGalva();
getData();

// function check2() {
//   document.getElementById("isVipCheckbox").checked = true;
// }

// function uncheck2() {
//   document.getElementById("isVipCheckbox").checked = false;
// }

// console.log(check.checked);

async function getData() {
  try {
    const response = await fetch("https://magnetic-melon-yam.glitch.me");
    console.log(response);
    if (response.ok) {
      const duomenys = await response.json();
      console.log(duomenys);
      lentelesGalva();
      document
        .getElementById("isVipCheckbox")
        .addEventListener("change", (event) => {
          const checkbox = event.target; // Changed 'check' to 'checkbox'

          if (checkbox.checked) {
            console.log(checkbox.checked);
            //const tab = document.getElementsByClassName(container);
            //tab.innerHTML = "";
            displayDuomenys(duomenys);
          } else {
            console.log(checkbox.checked);
            const tab = document.getElementsByClassName(container);
            tab.innerHTML = "";
            //lentelesGalva();
            //displayDuomenys(duomenys);
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
  table.setAttribute("id", " galva");
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
  container.append(table);
  table.append(tr);
  tr.append(th1, image, th2, th2Sur, th3, th4);
}

function displayDuomenys(duomenys) {
  const tbody = document.createElement("tbody");
  container.append(tbody);
  //tbody.innerHTML = "";
  const checkbox = document.getElementById("isVipCheckbox");
  // console.log(checkbox);
  duomenys.forEach((zmones) => {
    if (checkbox.checked) {
      if (zmones.vip) {
        const tr2 = document.createElement("tr");
        const thInfo1 = document.createElement("td");
        thInfo1.textContent = zmones.id;
        tbody.append(tr2, thInfo1);

        const imageTd = document.createElement("img");
        imageTd.src = zmones.image;
        imageTd.setAttribute("alt", "UserPicture");
        const images1 = document.createElement("td");
        images1.append(imageTd);
        tbody.append(images1);

        const thInfo2 = document.createElement("td");
        const vardasPavarde = zmones.name.split(" ");
        thInfo2.textContent = vardasPavarde[0];
        const pavarde = document.createElement("td");
        pavarde.textContent = vardasPavarde[1];
        const thInfo3 = document.createElement("td");
        thInfo3.textContent = zmones.city;
        const thInfo4 = document.createElement("td");
        thInfo4.textContent = zmones.fav_color;

        tbody.append(thInfo2, pavarde, thInfo3, thInfo4);
      }
    } else {
      const tr2 = document.createElement("tr");
      const thInfo1 = document.createElement("td");
      thInfo1.textContent = zmones.id;
      tbody.append(tr2, thInfo1);

      const imageTd = document.createElement("img");
      imageTd.src = zmones.image;
      imageTd.setAttribute("alt", "UserPicture");
      const images1 = document.createElement("td");
      images1.append(imageTd);
      tbody.append(images1);

      const thInfo2 = document.createElement("td");
      const vardasPavarde = zmones.name.split(" ");
      thInfo2.textContent = vardasPavarde[0];
      const pavarde = document.createElement("td");
      pavarde.textContent = vardasPavarde[1];
      const thInfo3 = document.createElement("td");
      thInfo3.textContent = zmones.city;
      const thInfo4 = document.createElement("td");
      thInfo4.textContent = zmones.fav_color;

      tbody.append(thInfo2, pavarde, thInfo3, thInfo4);
    }
  });
}
