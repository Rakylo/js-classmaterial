const container = document.querySelector(".container");

async function getData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    // console.log(response);
    if (response.ok) {
      const duomenys = await response.json();
      console.log(duomenys);
      displayDuomenys(duomenys);
    } else {
      console.log("beda bedele");
    }
  } catch (error) {
    console.log(error);
  }
}

function displayDuomenys(duomenys) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  //   console.log(duomenys.results[0].picture.large);
  img.src = duomenys.results[0].picture.large;
  const vardas = document.createElement("h3");
  const pavarde = document.createElement("h3");
  const amzius = document.createElement("h3");
  vardas.textContent = `${duomenys.results[0].name.first} ${duomenys.results[0].name.last} Age: ${duomenys.results[0].dob.age}`;
  //   pavarde.textContent = duomenys.results[0].name.last;
  //   amzius.textContent = duomenys.results[0].dob.age;
  const mailas = document.createElement("h4");
  mailas.textContent = "Email: " + duomenys.results[0].email;
  div.append(img, vardas, pavarde, amzius, mailas);
  container.append(div);
}

getData();
