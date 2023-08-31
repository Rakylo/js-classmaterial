// Promise, visada priima du parametrus resolve ir reject

// console.log("Failo pradzia");

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const random = Math.floor(Math.random() * 2) + 1;
//     if (random === 3) {
//       resolve("success");
//     } else {
//       reject("failed");
//     }
//   }, 2000);
// });

// prom
//   .then((res) => {
//     console.log(res, "then");
//     return res + " labas";
//   })
//   .then((res) => {
//     console.log(res, "then 2 ");
//   })
//   .then((res) => {
//     console.log(res, "then 3 ");
//   })
//   .catch((err) => {
//     console.log(err, "catch");
//   })
//   .finally(() => {
//     console.log("finnaly");
//   });

// console.log("Failo pabaiga");

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 2) + 1;
    if (random === 3) {
      resolve("resolved");
    } else {
      reject("failed");
    }
  }, 1000);
});

async function getData() {
  try {
    console.log("funkcijos pradzia");
    const res = await prom2;
    console.log(res);
    console.log("funkcijos pabaiga");
  } catch (error) {
    console.log(error, "catch dalis");
  }
}
getData();
