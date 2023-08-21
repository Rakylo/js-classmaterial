function handleBlur(event) {
  event.preventDefault();
  const name = document.querySelector("input[type=text").value;
  if (!document.querySelector("div")) {
    const listName = document.createElement("div");
    listName.innerText = name;
    labelName.append(listName);
  } else {
    const listName = document.querySelector("div");

    listName.innerText += ", " + name;
    labelName.append(listName);
  }
}

// Main code

document.querySelector("input").addEventListener("blur", handleBlur);
