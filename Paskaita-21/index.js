// fetch("https://jsonplaceholder.typicode.com/comment")
//   .then((response) => {
//     if (response.ok) {
//       console.log(response);
//       return response.json();
//     } else {
//       console.log("something went wrong");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err, "error happened");
//   });

// async function getPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/postss");
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//     } else {
//       console.log("kazkas negerai status: " + response.status);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// getPosts();

// Uzduotis#################

const container = document.querySelector(".container");

async function getPhotos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    if (response.ok) {
      const photos = await response.json();
      for (let i = 0; i < 100; i++) {
        generatePhotos(photos[i]);
      }
    } else {
      console.log("something wrong ;/ ");
    }
  } catch (error) {
    console.log(error);
  }
}

function generatePhotos(photo) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = photo.url;

  const tittle = document.createElement("h6");
  tittle.textContent = photo.tittle;

  div.append(tittle, img);
  container.append(div);
}

getPhotos();
// generatePhotos();
