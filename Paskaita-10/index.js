const obj = {
  name: "Vytautas",
  age: 30,
};

function changeObject(objektas) {
  const copy = JSON.parse(JSON.stringify(objektas));
  copy.name = "Migle";
}
changeObject(obj);
console.log(obj);

class Person {
  constructor(name, age) {
    console.log(name, age);
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log("Hello");
  }
}

const marius = new Person("Marius", 26);
const martynas = new Person("Martynas", 6000);
console.log(marius);
console.log(marius.name, marius.age);
console.log(marius.age);
console.log(martynas);
marius.sayHello();
martynas.sayHello();
