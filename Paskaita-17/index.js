class Car {
  static test = "123";
  #make;
  constructor(make, year) {
    this.#make = make;
    this.year = year;
  }
  static compareYears(year1, year2) {
    return year2 > year1;
  }
  getMake() {
    return this.#make;
  }
  setMake(make) {
    this.#make = make.trim();
  }
}

const bmw = new Car("bmw", 2000);
bmw.setMake("   Audi   ");
console.log(bmw.year);
console.log(bmw.getMake());
console.log(Car.test);

console.log(Car.compareYears(2000, 2002));

// Abstrakcija (objekto nepriklausomumas nuo isoriniu sudedamuju daliu)

class Person {
  #age;
  #name;
  constructor(age, name) {
    this.#age = age;
    this.#name = name;
  }

  walk() {
    console.log(`${this.#name} is walking`);
  }
}

const person1 = new Person(20, "Marius");
person1.walk();

// Paveldejimas (klase yra kitos klases konkretizacija)

class Shape {
  static test = "100";
  constructor(color) {
    this.color = color;
  }

  sayHello() {
    console.log("Hello");
  }
}

class Triangle extends Shape {
  static testTriangle = "200";
  constructor(color, height) {
    super(color);
    this.height = height;
  }
  sayHello() {
    console.log("Hello from triangle");
  }
}

const tr = new Triangle("red", 100);
const sh = new Shape("blue");
console.log(Triangle.test);
console.log(tr.color);
tr.sayHello();
sh.sayHello();

// Polimorfizmas (galimybe dirbti su objekktu nezinant jo tikslaus tipo bei strukturos)

class Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

class Tractor extends Vehicle {
  constructor(fuel) {}
  startEngine() {
    console.log("Tractor engine started");
  }
}
class Bike extends Vehicle {
  startEngine() {
    console.log("Bike engine started");
  }
}

const veh = new Vehicle();
const tra = new Tractor();
const bk = new Bike();

const vehicles = [veh, tra, bk];

vehicles.forEach((v) => {
  v.startEngine();
});
