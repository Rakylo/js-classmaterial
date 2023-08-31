const submitButton = document.getElementById("mygtukas");

submitButton.addEventListener("click", () => {
  const vardas = document.getElementById("vardas").value;
  console.log(vardas);
  const vardasCookie = document.cookie.split("=")[1];
  console.log(vardasCookie);
  if (vardas === vardasCookie) {
    const par = document.createElement("p");
    par.textContent = vardasCookie;
    document.body.append(par);
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    document.body.append(resetButton);
    resetButton.addEventListener("click", () => {
      document.cookie = vardas + "=" + ";" + "2023-08-25 21:22:00" + ";path=/";
    });
  } else {
    document.cookie = `Mano=${vardas}`;
  }
});
