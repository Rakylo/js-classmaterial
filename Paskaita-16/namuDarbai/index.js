class Automobiliai {
  constructor(brand, model, engine, basePrice) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice;
  }
  getPrice() {
    let addPrice = 0;
    if (this.engine === "electric") {
      addPrice = 10000;
    } else if (this.engine === "diesel") {
      addPrice = 5000;
    }
    return this.basePrice + addPrice;
  }
  //   turnOn() {
  //     alert(`vrooom ${this.model}`);
  //   }*{
}
const opel = new Automobiliai("opel", "zafira", "electric", 5000);
const audi = new Automobiliai("audi", "A7", "diesel", 1000);
const skoda = new Automobiliai("skoda", "octavia", "petrol", 8000);
// console.log(audi.model);
// console.log(opel.engine);
// audi.turnOn();
// opel.turnOn();
console.log(opel.getPrice(), opel.brand);
console.log(audi.getPrice(), audi.brand);
console.log(skoda.getPrice(), skoda.brand);
console.log(audi.basePrice);
