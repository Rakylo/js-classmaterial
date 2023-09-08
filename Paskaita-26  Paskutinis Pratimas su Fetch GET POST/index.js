// Planelis:
// 1. Fetch Host experience
// 2. Atvaizduojam experience
// 3. fetchinas skills
// 4. atvaizduojam skillsus

const HOST1 = "https://zany-skitter-caper.glitch.me/experiences";
const HOST2 = "https://zany-skitter-caper.glitch.me/skills";

const darbai = document.querySelector("#darbai");
const coding = document.querySelector("#coding");
getExperience();
getSkills();

async function getExperience() {
  try {
    const response = await fetch(HOST1);
    if (response.ok) {
      const exp = await response.json();
      console.log(exp);
      exp.forEach((exp) => {
        generateExperienceCard(exp);
      });
    } else {
      console.log("something wrong with experience");
    }
  } catch (error) {
    // console.log(error);
  }
}

function generateExperienceCard(exp) {
  const exp1 = document.querySelector("#exp1");

  const card = document.createElement("div");
  card.classList.add("parent");

  const divas1 = document.createElement("div");
  divas1.classList.add("div1");

  const yearsWorked = document.createElement("p");
  yearsWorked.textContent = exp.startYear + "-" + exp.finishYear;
  yearsWorked.setAttribute("class", "bold");

  const divas2 = document.createElement("div");
  divas2.classList.add("div2");

  const companyName = document.createElement("p");
  companyName.textContent = exp.companyName;
  companyName.setAttribute("class", "bold");

  const divas3 = document.createElement("div");
  divas3.classList.add("div3");

  const position = document.createElement("p");
  position.setAttribute("class", "position");
  position.textContent = exp.position;

  const divas4 = document.createElement("div");
  divas4.classList.add("div4");

  const description = document.createElement("p");
  description.setAttribute("class", "description");
  description.textContent = exp.description;

  card.append(
    divas1,
    yearsWorked,
    divas2,
    companyName,
    divas3,
    position,
    divas4,
    description
  );
  exp1.append(card);
}
async function getSkills() {
  try {
    const response = await fetch(HOST2);
    if (response.ok) {
      const skl = await response.json();
      //   console.log(skl);
      skl.forEach((skl) => {
        generateSkillsCard(skl);
      });
    } else {
      console.log("something wrong with skilzzzz");
    }
  } catch (error) {
    // console.log(error);
  }
}

function generateSkillsCard(skl) {
  const cardSkills = document.createElement("div");
  cardSkills.classList.add("skills-card");

  const skillsTitle = document.createElement("div");
  skillsTitle.textContent = skl.title;

  const skillsProc = document.createElement("div");
  skillsProc.setAttribute("class", "procentai");

  skillsProc.textContent = skl.level + "%";
  console.log(skillsProc);

  const skillsLevel = document.createElement("meter");
  skillsLevel.setAttribute("class", "front");
  skillsLevel.setAttribute("value", skl.level);
  skillsLevel.setAttribute("min", 1);
  skillsLevel.setAttribute("max", 100);
  // skillsLevel.setAttribute("optimum", 55);

  cardSkills.append(skillsTitle, skillsProc, skillsLevel);
  coding.append(cardSkills);
}
