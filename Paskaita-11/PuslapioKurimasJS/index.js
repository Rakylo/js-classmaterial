document.body.style.background = "cyan";

const pagrindas = document.createElement("main");
pagrindas.style.background = "white";
pagrindas.style.padding = "5rem";
pagrindas.style.width = "50%";
pagrindas.style.borderRadius = "5rem";

pagrindas.style.margin = "2rem auto 0 auto";
pagrindas.style.textAlign = "center";

document.body.append(pagrindas);

const veidas = document.createElement("img");
veidas.src =
  "/Paskaita-11/PuslapioKurimasJS/Images/160107100400-monkey-selfie.jpg";
veidas.style.width = "20rem";
veidas.style.height = "20rem";
veidas.style.objectFit = "cover";
veidas.style.borderRadius = "50%";
// veidas.style.padding = "0.5rem";
veidas.style.border = "10px solid #599";
veidas.style.marginTop = "-6.5rem";
pagrindas.append(veidas);

const tekstas0 = document.createElement("h1");
tekstas0.textContent = "Makaka Matufa";
pagrindas.append(tekstas0);

const tekstas = document.createElement("h2");
tekstas.textContent = "Founder of apes";
tekstas.style.color = "gray";
pagrindas.append(tekstas);

const tekstas1 = document.createElement("h4");
tekstas1.textContent = "Kaunas LTU";
tekstas1.style.color = "gray";
pagrindas.append(tekstas1);
