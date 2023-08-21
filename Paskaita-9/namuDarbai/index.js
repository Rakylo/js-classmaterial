const h1 = document.querySelector("#vardas");

h1.addEventListener("click", changeStyle);

function changeStyle() {
  h1.style.fontSize = "64px";
  h1.style.color = "red";
  h1.style.textAlign = "center";
}

naujas;
const button = document.querySelector("button");
button.style.cssText = "position:absolute; top:0px; left:0px;";
button.addEventListener("click", changeStyle1);

function changeStyle1(e) {
  if (button.style.top === "0px" && button.style.left === "0px") {
    e.target.style.cssText = "position:absolute; top:0px; right:0px;";
  } else if (button.style.top === "0px" && button.style.right === "0px") {
    e.target.style.cssText = "position:absolute; bottom:0px; right:0px";
  } else if (button.style.right === "0px" && button.style.bottom === "0px") {
    e.target.style.cssText = "position:absolute; bottom:0px; left:0px";
  } else {
    e.target.style.cssText = "position:absolute; top:0px; left:0px;";
  }
}

// 4 pratimas

document.querySelector("#color").addEventListener("input", (event) => {
  const spalva = event.target.value;
  document.body.style.backgroundColor = spalva.lenght < 3 ? "red" : "green";
});
