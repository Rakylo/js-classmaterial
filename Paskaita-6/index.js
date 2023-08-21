document.querySelector("#someForm").addEventListener("submit", handleSubmit);

const emailInput = document.querySelector("input[type=email]");
const ageInput = document.querySelector("input[type=number]");
const commentInput = document.querySelector("input[type=text]");
const driversLicenseCheckboxInput = document.querySelector(
  "input[type=checkbox]"
);
const makeSelect = document.querySelector("#make");
const sayHelloButton = document.querySelector("#sayHelloButton");
const h1 = document.querySelector("h1");
const passwordInput = document.querySelector("input[type=password]");

driversLicenseCheckboxInput.addEventListener("change", handleCheckboxChange);
sayHelloButton.addEventListener("click", sayHelloHandler);
passwordInput.addEventListener("input", passwordChangeHandler);

function passwordChangeHandler(e) {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  const password = e.target.value;
  const isStrongPassword = regex.test(password);
  if (isStrongPassword) {
    passwordInput.classList.add("good");
    passwordInput.classList.remove("bad");
  } else {
    passwordInput.classList.add("bad");
    passwordInput.classList.remove("good");
  }

  if (!password) {
    passwordInput.classList.remove("good");
    passwordInput.classList.remove("bad");
  }
}

function sayHelloHandler() {
  const age = ageInput.value;
  const comment = commentInput.value;

  h1.textContent = `jusu amzius yra ${age} ir jusu nuomone apie pasauly yra ${comment}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  const age = ageInput.value;
  const comment = commentInput.value;
  const driversLicense = driversLicenseCheckboxInput.checked;
  const make = makeSelect.value;

  const values = {
    email,
    age,
    comment,
    hasDrivrsLicense: driversLicense,
  };

  console.log(values);
}

function handleCheckboxChange(event) {
  const isChecked = event.target.checked;
  if (isChecked) {
    makeSelect.classList.remove("hidden");
  } else {
    makeSelect.classList.add("hidden");
  }
}
