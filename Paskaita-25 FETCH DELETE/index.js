const HOST = "https://sophisticated-humane-dandelion.glitch.me";

const container = document.querySelector(".container");

async function getProducts() {
  try {
    const response = await fetch(HOST);
    if (response.ok) {
      const products = await response.json();
      console.log(products);
      products.forEach((products) => {
        generateProductCard(products);
      });
    } else {
      console.log("something wrong");
    }
  } catch (error) {
    console.log(error);
  }
}
getProducts();

function generateProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const pImage = document.createElement("img");
  pImage.src = product.image;
  //   console.log(pImage);

  const pTitle = document.createElement("p");
  pTitle.textContent = product.title;

  const pPrice = document.createElement("h2");
  pPrice.textContent = "€" + product.price;
  pPrice.style.color = "red";

  const pButton = document.createElement("button");
  pButton.textContent = "DELETE";

  pButton.addEventListener("click", async () => {
    try {
      const itemId = product.id;
      //alert(itemId);
      const response = await fetch(`${HOST}/${itemId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
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

  card.append(pImage, pTitle, pPrice, pButton);
  container.append(card);
}

function generateForm() {
  const form = document.querySelector("#forma");

  //   console.log(paveiksliukasInput.value, pavadimasInput.value, kainaInput.value);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const paveiksliukasInput = document.querySelector("#paveiksliukas");
    const pavadimasInput = document.querySelector("#pavadinimas");
    const kainaInput = document.querySelector("#kaina");

    //   const submitButton = document.querySelector("#mygtukas");

    const paveiksliukas = paveiksliukasInput.value;
    const pavadinimas = pavadimasInput.value;
    const kaina = kainaInput.value;
    //console.log(kaina);

    try {
      const response = await fetch(HOST, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: paveiksliukas,
          price: kaina,
          title: pavadinimas,
        }),
      });
      if (response.ok) {
        //   alert("pridetas");
        generateProductCard({
          image: paveiksliukas,
          price: kaina,
          title: pavadinimas,
        });
      } else {
        alert("nepavyko");
      }
    } catch (error) {
      console.log(error);
    }
  });
}
generateForm();
