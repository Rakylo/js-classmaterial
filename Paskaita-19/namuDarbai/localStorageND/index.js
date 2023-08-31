// Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką.

const duomenys = {
  name: "Martynas",
  surname: "Rakauskas",
  about: "kanors",
  link: "http://www.martynas.eu",
};
localStorage.setItem("manoDuomenys", JSON.stringify(duomenys));

const duomenysPaimti = localStorage.getItem("manoDuomenys");
const bla = JSON.parse(duomenysPaimti);
console.log(bla);

const par = document.createElement("p");
par.textContent = `Name: ${duomenys.name}`;
const bor = document.createElement("p");
bor.textContent = `Surname: ${duomenys.surname}`;
const about = document.createElement("p");
about.textContent = `About ${duomenys.about}`;
const link = document.createElement("p");
link.textContent = `Link ${duomenys.link}`;
document.body.append(par, bor, about, link);
