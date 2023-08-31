// console.log(probability1);
async function bility() {
  const pazadas = new Promise((resolve, reject) => {
    setTimeout(() => {
      let probability1 = Math.floor(Math.random() * 5) + 1;
      if (probability1 < 5) {
        resolve("taip");
      } else {
        reject("ne");
      }
    }, 1000);
  });
  pazadas
    .then((res) => {
      console.log("veikia");
      return res + " veikia";
    })
    .then((res) => {
      console.log(res, "antras then");
    })
    .catch((res) => {
      console.log(res, "Ooops pazadas atmestas");
    })
    .finally(() => {
      console.log("vis tiek");
    });
}

bility();
