// Parašykite JavaScript kodą, kuris leis vartotojui paspaudus ant mygtuko "Rodyti pranešimus"
// gauti pranešimų duomenis iš JSONPlaceholder API (API endpoint'as pateiktas žemiau).

// Paspaudus mygtuką "Rodyti pranešimus":

//     Pranešimų informacija turi būti pateikta <div id="output"></div> bloke.
//     1.1. Informacija, kuri turi būti pateikta: "title" ir "body" (kortelėje).
//     Žinutė "Paspauskite mygtuką "Rodyti pranešimus" norėdami pamatyti pranešimus" turi išnykti.

// Pastaba: Pranešimų informacija (kortelė) turi turėti bent minimalų stilių.

// API endpoint'as:

const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

const show = document.querySelector("#btn");
const output = document.querySelector("#output");

show.addEventListener("click", (e) => {
  e.preventDefault();
  getPosts();
  const message = document.querySelector("#message");
  message.innerHTML = "";
  //   message.remove();
  //   show.innerHTML = "";
  show.remove();
});

async function getPosts() {
  try {
    const response = await fetch(ENDPOINT);
    if (response.ok) {
      const posts = await response.json();
      console.log(posts);
      posts.forEach((post) => {
        generatePost(post);
      });
    } else {
      console.log("negauti pastai");
    }
  } catch (error) {
    console.log("different something went wrong");
  }
}
// getPosts();

function generatePost(post) {
  const title = document.createElement("p");
  title.textContent = "Title: " + post.title;
  title.style.color = "red";

  const br = document.createElement("p");
  br.textContent = "---";

  const brr = document.createElement("p");
  brr.textContent = "===";

  const body = document.createElement("p");
  body.textContent = "Body: " + post.body;
  body.style.color = "blue";

  output.append(title, br, body, brr);
}
