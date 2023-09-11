/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

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
  title.textContent = "Login: " + post.login;
  title.style.color = "red";

  const br = document.createElement("p");
  br.textContent = "---";

  const brr = document.createElement("p");
  brr.textContent = "===";

  const body = document.createElement("p");
  body.textContent = "Avatar_URL: " + post.avatar_url;
  body.style.color = "blue";

  output.append(title, br, body, brr);
}
