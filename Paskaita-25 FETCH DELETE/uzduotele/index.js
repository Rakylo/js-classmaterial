const HOST = "http://localhost:3000/people";

const container = document.querySelector(".container");
const form = document.querySelector("#form");

async function fetchPeople() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const people = await response.json();
      people.forEach((person) => {
        generatePersonCard(person);
      });
    } else {
      alert("failed to fetch");
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}
function generatePersonCard(person) {
  const card = document.createElement("div");
  card.classList.add("card");

  const pName = document.createElement("p");
  pName.textContent = person.name;

  const pAge = document.createElement("p");
  pAge.textContent = person.age;

  const pButton = document.createElement("button");
  pButton.textContent = "DELETE";

  pButton.addEventListener("click", async () => {
    try {
      const response = await fetch(HOST + `/${person.id}`);
      if (response.ok) {
        // alert("istrynem");
        card.remove();
        // e.target.parentElement.remove();
      } else {
        alert("nepavyko istrint");
      }
    } catch (error) {
      console.log(error);
    }
  });

  card.append(pName, pAge, pButton);

  container.append(card);
}

function generateForm() {
  const labelName = document.createElement("label");
  labelName.textContent = "Name";
  labelName.setAttribute("for", "name");

  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "name";

  const labelAge = document.createElement("label");
  labelAge.textContent = "Age";
  labelAge.setAttribute("for", "age");

  const inputAge = document.createElement("input");
  inputAge.type = "number";
  inputAge.id = "age";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";

  submitButton.addEventListener("click", async () => {
    try {
      const name = inputName.value;
      const age = inputAge.value;
      //   console.log(name, age);

      const response = await fetch(HOST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
        }),
      });
      if (response.ok) {
        generatePersonCard({ name, age });
      } else {
        alert("nepavyko");
      }
    } catch (error) {
      console.log(error);
    }
  });

  form.append(
    document.createElement("br"),

    labelName,
    inputName,
    document.createElement("br"),
    labelAge,
    inputAge,
    document.createElement("br"),

    submitButton
  );
}
generateForm();

// fetchPeople();
